import Component from 'ui/component/Component';

export class ContainerModel {
  private elements: Array<Component<any>> = [];

  addElement(element: Component<any>): void {
    if (element) {
      this.elements.push(element);
    }
  }

  getElements(): Array<Component<any>> {
    return this.elements;
  }
}
