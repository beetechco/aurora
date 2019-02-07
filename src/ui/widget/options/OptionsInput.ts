import { Component } from '../../component/Component';
import { OptionsModel } from './OptionsModel';
import { IOptionsView } from '../../view/options/IOptionsView';

export class OptionsInput extends Component<OptionsModel<string>, IOptionsView<string>> {
  static UICODE = 'OPTIONS';

  constructor(id: string) {
    super(id);
  }

  getUICode(): string {
    return OptionsInput.UICODE;
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
    this.getView().setOptions(this.getModel().getOptions());
    console.log('options sincronziar >', this.getModel().getOptions());
  }

  sync = () => {
    this.sinchronize();
  }

}
