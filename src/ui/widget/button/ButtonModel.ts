import ActionListener from 'ui/component/common/ActionListener';

export class ButtonModel {
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
