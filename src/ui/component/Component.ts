import IView from "./view/IView";
import UIRegistry from "ui/UIRegistry";

export default class Component<T> {
  private id: String;
  private view: IView<T> = null;
  private model: T;
  private parent: Component<any>;

  constructor(id: String) {
    this.id = id;
  }

  public setParent(parent: Component<any>): void {
    this.parent = parent;
  }

  public setModel(model: T): void {
    this.model = model;
  }

  public getModel(): T {
    return this.model;
  }

  public getUICode(): String{
    return "UIComponent";
  }

  public getUI(): IView<T> {
    if (this.view) {
      return this.view;
    }

    if (this.getUICode()) {
      const view: Function = UIRegistry.getView(this.getUICode() as string);
      this.view = view(this.id, this.model) as IView<T>;
      if (this.parent) {
        this.view.setParent(this.parent.getUI());
      }
    }

    return this.view;
  }

  public refreshUI(): void {
    if (this.view) {
      this.view.repaint();
    }
  }
}
