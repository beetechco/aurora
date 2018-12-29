import { Component } from '../../component/Component';
import { ButtonModel } from './ButtonModel';

export class Button extends Component<ButtonModel> {
  static UICODE = 'BUTTON';
  constructor(id: string) {
    super(id);
  }

  getUICode(): string {
    return Button.UICODE;
  }
}
