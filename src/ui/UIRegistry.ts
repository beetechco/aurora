import IView from 'ui/component/view/IView';

export default class UIRegistry {
  private static registry: any = {};
  public static register(key: string, view: Function): void {
    UIRegistry.registry[key] = view;
  }

  public static getView(key: string): Function {
    return UIRegistry.registry[key];
  }
}
