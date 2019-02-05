import { IView } from './view/IView';
import { UIRegistry } from '../UIRegistry';
import { IModel } from './model/IModel';

export class Component<T extends IModel,V extends IView> {
  private id: string;
  private initialized = false;
  private view: V = null;
  private model: T;
  private parent: Component<IModel,IView>;

  constructor(id: string) {
    this.id = id;
    this.getUI();
  }

  getId(){
    return this.id;
  }

  setModel(model: T): void {
    this.model = model;
  }

  getModel(): T {
    return this.model;
  }

  setParent(parent: Component<IModel,IView>): void {
    this.parent = parent;
  }

  getParent(): Component<IModel,IView> {
    return this.parent;
  }

  getUICode(): string {
    return 'UIComponent';
  }

  getUI(): V {
    if (!this.view && !!this.getUICode()) {
      const view: Function = UIRegistry.getView(this.getUICode() as string);

      if (view) {
        this.view = view(this.id) as V;

        if (this.parent) {
          this.view.setParent(this.parent.getUI() as IView);
        }
      }
    }

    return this.view;
  }

  getView(): V {
    return this.view;
  }

  init(){

  }

  paint(): any {
    if (!this.initialized) {
      this.init();
      this.initialized = true;
    }
    return this.getUI().paint();
  }

  refresh(): void {
    if (this.view) {
      this.sync();
      this.view.repaint();
    }
  }

  sync(): void {

  }

}
