import * as React from 'react';
import { IView } from 'ui/component/view/IView';
import { ContainerView } from 'ui/view/container/ContainerView';
import Component from 'ui/component/Component';

export class CustomContainerView extends ContainerView {
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
}

interface IContainerComponentState {
  elements: Array<IView<any>>;
}

interface IContainerComponentProps {
  id: string;
  elements: Array<IView<any>>;
}

export class ContainerComponent extends React.Component<
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
