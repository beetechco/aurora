import * as React from 'react';
import IView from 'ui/component/view/IView';
import IComponentView from 'ui/component/view/IComponentView';
import ButtonModel from 'ui/widget/button/ButtonModel';
import { timingSafeEqual } from 'crypto';
import ActionListener from 'ui/component/common/ActionListener';

export default class ButtonView implements IView<ButtonModel> {
  private model: ButtonModel;
  private view: any;
  private elementRef: React.RefObject<any>;

  constructor(model: ButtonModel) {
    this.model = model;
  }

  onAction = () => {
    if (this.model.getActionListeners()) {
      this.model.getActionListeners().forEach((actionListener: ActionListener) => actionListener.notify());
    }
  }

  public paint(): any {
    console.log(this.model);
    if (!this.view) {
      this.elementRef = React.createRef();
      this.view = (<ButtonComponent ref={this.elementRef} label={this.model.getLabel()} onAction={this.onAction} />);
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
  label: String;
  onAction: Function;
}

class ButtonComponent extends React.Component<IButtonComponentProps, IButtonComponentState> {
  private ref: any;

  constructor(props: any) {
    super(props);
    this.state = { label: 'INICIAL' };
    this.changeLabel = this.changeLabel.bind(this);
  }

  public changeLabel(label: String): void {
    this.setState({ label });
  }

  private onClick = () => {
    if (this.props.onAction) {
      this.props.onAction();
    }
  };

  render(): any {
    return (<button id='boton' onClick={this.onClick}>{this.state.label}</button>);
  }
}
