import { Component } from '../../component/Component';
import { ButtonModel } from './ButtonModel';
import { IButtonView } from '../../view/button/IButtonView';

export class Button extends Component<ButtonModel,IButtonView> {
  static UICODE = 'BUTTON';

  constructor(id: string) {
    super(id);
  }

  getUICode(): string {
    return Button.UICODE;
  }
}
