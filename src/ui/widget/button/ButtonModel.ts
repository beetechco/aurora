import { ActionListener } from 'ui/component/common/ActionListener';
import { Model } from 'ui/component/model/Model';

export class ButtonModel extends Model {
  private label: string;
  private listeners: ActionListener[] = [];

  setLabel(label: string): void {
    this.label = label;
  }

  getLabel(): string {
    return this.label;
  }

  addActionListener(actionListener: ActionListener): void {
    this.listeners.push(actionListener);
  }

  getActionListeners(): Array<ActionListener> {
    return this.listeners;
  }
}
