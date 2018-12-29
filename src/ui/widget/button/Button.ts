import Component from '../../component/Component';
import { ButtonModel } from './ButtonModel';

export class Button extends Component<ButtonModel> {
  static UICODE: string = 'BUTTON';
  constructor(id: String) {
    super(id);
  }

  getUICode(): string {
    return Button.UICODE;
  }
}
