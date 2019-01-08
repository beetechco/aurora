import { IActionListener } from '../../component/common/IActionListener';
import { Model } from '../../component/model/Model';

export class ButtonModel extends Model {
  private code: string;
  private icon: string;
  private label: string;
  private listeners: IActionListener[] = [];

  setCode(code: string): void {
    this.code = code;
  }

  getCode(): string {
    return this.code;
  }

  setLabel(label: string): void {
    this.label = label;
  }

  getLabel(): string {
    return this.label;
  }

  setIcon(icon: string): void {
    this.icon = icon;
  }

  getIcon(): string {
    return this.icon;
  }

  addActionListener(actionListener: IActionListener): void {
    this.listeners.push(actionListener);
  }

  getActionListeners(): IActionListener[] {
    return this.listeners;
  }
}
