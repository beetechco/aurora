import { IView } from 'ui/component/view/IView';

export class UIRegistry {
  private static registry: any = {};
  
  static register(key: string, view: Function): void {
    UIRegistry.registry[key] = view;
  }

  static getView(key: string): Function {
    return UIRegistry.registry[key];
  }
}
