import { IActionListener } from '../../component/common/IActionListener';
import { Model } from '../../component/model/Model';

export class ButtonModel extends Model {
  private code: string;
  private icon: string;
  private label: string;
  private listeners: IActionListener[] = [];
  private onlyIcon: boolean = false;

  addActionListener(actionListener: IActionListener): void {
    this.listeners.push(actionListener);
  }

  getActionListeners(): IActionListener[] {
    return this.listeners;
  }

  getCode(): string {
    return this.code;
  }

  getIcon(): string {
    return this.icon;
  }


  getLabel(): string {
    return this.label;
  }

  getOnlyIcon(): boolean {
    return this.onlyIcon;
  }

  setCode(code: string): void {
    this.code = code;
  }

  setIcon(icon: string): void {
    this.icon = icon;
  }

  setLabel(label: string): void {
    this.label = label;
  }

  setOnlyIcon(onlyIcon: boolean): void {
    this.onlyIcon = onlyIcon;
  }

}
