import * as React from 'react';
import { IView } from 'ui/component/view/IView';

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
      <div id={`${this.props.id}:container`}>
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
