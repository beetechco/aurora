import { randomId } from 'ui/Utils';
import IView from 'ui/component/view/IView';

export class View {
  private id: string;
  private parent: IView<any>;

  constructor(id: string) {
    if (id) {
      this.id = id;
    } else {
      this.id = randomId();
    }
  }

  getId(): string {
    if (this.parent) {
      return `${this.parent.getId()}::${this.id}`;
    }
    return this.id;
  }

  setParent(parent: IView<any>): void {
    this.parent = parent;
  }
}
