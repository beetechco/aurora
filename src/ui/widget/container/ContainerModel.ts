import Component from 'ui/component/Component';

export default class ContainerModel {
  private elements: Array<Component<any>> = [];

  public addElement(element: Component<any>): void {
    if (element) {
      this.elements.push(element);
    }
  }

  public getElements(): Array<Component<any>> {
    return this.elements;
  }
}
