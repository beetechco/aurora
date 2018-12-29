import { randomId } from "ui/Utils";
import IView from "ui/component/view/IView";
export default class View {
  private id: String;
  private parent: IView<any>;

  constructor(id: String) {
    if (id) {
      this.id = id;
    } else {
      this.id = randomId();
    }
  }

  public getId(): String {
    if (this.parent) {
      return `${this.parent.getId()}::${this.id}`;
    }
    return this.id;
  }

  public setParent(parent: IView<any>): void {
    this.parent = parent;
  }
}
