import * as React from "react";
import IView from "ui/component/view/IView";
import View from "../View";
import ButtonModel from "ui/widget/button/ButtonModel";
import ActionListener from "ui/component/common/ActionListener";

export default class ButtonView extends View implements IView<ButtonModel> {
  private model: ButtonModel;
  private view: any;
  private elementRef: React.RefObject<any>;

  constructor(id: String, model: ButtonModel) {
    super(id);
    this.model = model;
  }

  onAction = () => {
    if (this.model.getActionListeners()) {
      this.model
        .getActionListeners()
        .forEach((actionListener: ActionListener) =>
          actionListener.actionPerformed()
        );
    }
  };

  public paint(): any {
    if (!this.view) {
      this.elementRef = React.createRef();
      this.view = (
        <ButtonComponent
          ref={this.elementRef}
          id={this.getId()}
          label={this.model.getLabel()}
          onAction={this.onAction}
        />
      );
    }
    return this.view;
  }

  public repaint() {
    if (this.elementRef && this.elementRef.current) {
      this.elementRef.current.changeLabel(this.model.getLabel());
    }
  }
}

interface IButtonComponentState {
  label: String;
}

interface IButtonComponentProps {
  id: String;
  label: String;
  onAction: Function;
}

class ButtonComponent extends React.Component<
  IButtonComponentProps,
  IButtonComponentState
> {
  private ref: any;

  constructor(props: any) {
    super(props);
    this.state = {
      label: this.props.label
    };
  }

  public changeLabel = (label: String): void => {
    this.setState({
      label
    });
  };

  private onClick = () => {
    if (this.props.onAction) {
      this.props.onAction();
    }
  };

  render(): any {
    return (
      <button id={`${this.props.id}:button`} onClick={this.onClick}>
        {this.state.label}
      </button>
    );
  }
}
