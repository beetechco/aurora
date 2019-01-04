import { IView } from './view/IView';
import { UIRegistry } from '../UIRegistry';
import { IModel } from './model/IModel';

export class Component<T> {
  private id: string;
  private view: IView<T> = null;
  private model: T;
  private parent: Component<IModel>;

  constructor(id: string) {
    this.id = id;
  }

  setModel(model: T): void {
    this.model = model;
  }

  getModel(): T {
    return this.model;
  }

  setParent(parent: Component<IModel>): void {
    this.parent = parent;
  }

  getParent(): Component<IModel> {
    return this.parent;
  }

  getUICode(): string {
    return 'UIComponent';
  }

  getUI(): IView<T> {
    if (!this.view && !!this.getUICode()) {
      const view: Function = UIRegistry.getView(this.getUICode() as string);

      if (view) {
        this.view = view(this.model, this.id) as IView<T>;

        if (this.parent) {
          this.view.setParent(this.parent.getUI());
        }
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
