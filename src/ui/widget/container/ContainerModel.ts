import { Component } from '../../component/Component';
import { Model } from '../../component/model/Model';

export class ContainerModel extends Model {
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
