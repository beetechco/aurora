import ActionListener from "ui/component/common/ActionListener";

export default class ButtonModel {
  private label: String;
  private listeners: Array<ActionListener> = [];

  public setLabel(label: String): void {
    this.label = label;
  }

  public getLabel(): String {
    return this.label;
  }

  public addActionListener(actionListener: ActionListener): void {
    this.listeners.push(actionListener);
  }

  public getActionListeners(): Array<ActionListener> {
    return this.listeners;
  }
}
