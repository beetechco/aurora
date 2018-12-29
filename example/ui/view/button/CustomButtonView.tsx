import * as React from 'react';
import { ButtonView } from 'ui/view/button/ButtonView';
import { ButtonModel } from 'ui/widget/button/ButtonModel';

export class CustomButtonView extends ButtonView {
  constructor(id: string, model: ButtonModel) {
    super(id, model);
  }
  
  renderComponent = () => {
    return (
      <ButtonComponent
        ref={this.elementRef}
        id={this.getId()}
        label={this.model.getLabel()}
        onAction={this.onAction}
      />
    );
  }
}

interface IButtonComponentState {
  label: string;
}

interface IButtonComponentProps {
  id: string;
  label: string;
  onAction: Function;
}

class ButtonComponent extends React.Component<
  IButtonComponentProps,
  IButtonComponentState
  > {
  constructor(props: IButtonComponentProps) {
    super(props);
    this.state = {
      label: this.props.label
    };
  }

  changeLabel = (label: string): void => {
    this.setState({
      label
    });
  };

  private onClick = () => {
    if (this.props.onAction) {
      this.props.onAction();
    }
  };

  render() {
    return (
      <div id={`${this.props.id}:button`} onClick={this.onClick}>
        {this.state.label}
      </div>
    );
  }
}
