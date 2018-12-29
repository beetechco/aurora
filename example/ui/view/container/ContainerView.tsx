import * as React from 'react';
import IView from 'ui/component/view/IView';
import View from '../View';
import ContainerModel from 'ui/widget/container/ContainerModel';
import Component from 'ui/component/Component';

export default class ContainerView extends View
  implements IView<ContainerModel> {
  private model: ContainerModel;
  private view: any;
  private elementRef: React.RefObject<any>;

  constructor(id: String, model: ContainerModel) {
    super(id);
    this.model = model;
  }

  public paint(): any {
    if (!this.view) {
      this.elementRef = React.createRef();
      this.view = (
        <ContainerComponent
          ref={this.elementRef}
          id={this.getId()}
          elements={this.model
            .getElements()
            .map((component: Component<any>) => component.getUI())}
        />
      );
    }
    return this.view;
  }

  public repaint() {
    if (this.elementRef && this.elementRef.current) {
      this.elementRef.current.changeElements(
        this.model
          .getElements()
          .map((component: Component<any>) => component.getUI())
      );
    }
  }
}

interface IContainerComponentState {
  elements: Array<IView<any>>;
}

interface IContainerComponentProps {
  id: String;
  elements: Array<IView<any>>;
}

class ContainerComponent extends React.Component<
  IContainerComponentProps,
  IContainerComponentState
> {
  private ref: any;

  constructor(props: any) {
    super(props);
    this.state = { elements: this.props.elements };
  }

  changeElements = (elements: Array<IView<any>>) => {
    this.setState({ elements });
  };

  render(): any {
    return (
      <div id={`${this.props.id}:container`}>
        {this.state.elements &&
          this.state.elements.map((view: IView<any>) => (
            <div key={`${this.props.id}:container:${view.getId()}`}>
              {view.paint()}
            </div>
          ))}
      </div>
    );
  }
}
