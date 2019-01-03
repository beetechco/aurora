import * as React from 'react';
import { ButtonView } from 'ui/view/button/ButtonView';
import { ButtonModel } from 'ui/widget/button/ButtonModel';

export class CustomButtonView extends ButtonView {
  constructor(model: ButtonModel, id?: string) {
    super(model, id);
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

  repaint = () => {
    if (this.elementRef && this.elementRef.current) {
      this.elementRef.current.changeLabel(this.model.getLabel());
    }
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
