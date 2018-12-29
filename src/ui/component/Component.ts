import { IView } from './view/IView';
import { UIRegistry } from 'ui/UIRegistry';

export class Component<T> {
  private id: string;
  private view: IView<T> = null;
  private model: T;
  private parent: Component<any>;

  constructor(id: string) {
    this.id = id;
  }

  setParent(parent: Component<any>): void {
    this.parent = parent;
  }

  setModel(model: T): void {
    this.model = model;
  }

  getModel(): T {
    return this.model;
  }

  getUICode(): string {
    return 'UIComponent';
  }

  getUI(): IView<T> {
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

  refreshUI(): void {
    if (this.view) {
      this.view.repaint();
    }
  }
}
