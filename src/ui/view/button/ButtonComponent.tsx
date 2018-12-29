
import * as React from "react";

interface IButtonComponentState {
  label: string;
}

interface IButtonComponentProps {
  id: string;
  label: string;
  onAction: Function;
}

export class ButtonComponent extends React.Component<
  IButtonComponentProps,
  IButtonComponentState
  > {
  constructor(props: any) {
    super(props);
    this.state = {
      label: this.props.label,
    };
  }

  changeLabel = (label: string): void => {
    this.setState({
      label,
    });
  };

  onClick = () => {
    if (this.props.onAction) {
      this.props.onAction();
    }
  };

  render(): any {
    return (
      <button
        id={`${this.props.id}:button`}
        onClick={this.onClick}
      >
        {this.state.label}
      </button>
    );
  }
}