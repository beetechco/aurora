import { Component } from '../../component/Component';
import { InputModel } from './InputModel';
import { IInputView } from '../../view/input/IInputView';

export class Input extends Component<InputModel<string>, IInputView<string>> {
  static UICODE = 'INPUT';

  constructor(id: string) {
    super(id);
  }

  getUICode(): string {
    return Input.UICODE;
  }

  init() {
    this.getUI();
    this.getView().setOnChangeCallback(this.onChangeCallback);
    this.sinchronize();
  }

  onChangeCallback = (e: any) => {
    this.getModel().setValue(e.target.value);
    this.sinchronize();
    this.getUI().repaint();
  }

  sinchronize() {
    this.getView().setEditable(this.getModel().getEditable());
    this.getView().setValue(this.getModel().getValue());
  }

  sync = () => {
    this.sinchronize();
  }

}
