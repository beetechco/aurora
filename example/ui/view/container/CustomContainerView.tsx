import * as React from 'react';
import { IView } from 'ui/component/view/IView';
import { ContainerView } from 'ui/view/container/ContainerView';
import { Component } from 'ui/component/Component';
import { ContainerModel } from 'ui/widget/container/ContainerModel';

export class CustomContainerView extends ContainerView {
  constructor(model: ContainerModel, id?:string) {
    super(model, id);
  }

  renderComponent = () => {
    return (
      <ContainerComponent
        ref={this.elementRef}
        id={this.getId()}
        elements={
          this.model
            .getElements()
            .map((component: Component<any>) =>
              component.getUI()
            )
        }
      />
    );
  }

  repaint = () => {
    if (this.elementRef && this.elementRef.current) {
      this.elementRef.current.changeElements(
        this.model
          .getElements()
          .map((component: Component<any>) =>
            component.getUI()
          )
      );
    }
  }
}

interface IContainerComponentState {
  elements: Array<IView<any>>;
}

interface IContainerComponentProps {
  id: string;
  elements: Array<IView<any>>;
}

class ContainerComponent extends React.Component<
  IContainerComponentProps,
  IContainerComponentState
  > {
  constructor(props: IContainerComponentProps) {
    super(props);
    this.state = { 
      elements: this.props.elements,
    };
  }

  changeElements = (elements: Array<IView<any>>) => {
    this.setState({ 
      elements,
    });
  };

  render() {
    return (
      <div 
        id={`${this.props.id}:container`}
        className='custom-container'
      >
        {
          (this.state.elements || [])
            .map((view: IView<any>) => (
              <div key={`${this.props.id}:container:${view.getId()}`}>
                {view.paint()}
              </div>
            ))
        }
      </div>
    );
  }
}
