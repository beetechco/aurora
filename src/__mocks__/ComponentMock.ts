import { Component } from '../ui/component/Component';
import { Model } from '../ui/component/model/Model';
import { View } from '../ui/view/View';

export class ComponentMock extends Component<Model, View> {
  static UICODE = 'COMPONENT_MOCK';
  
  constructor(id: string) {
    super(id);
  }

  getUICode(): string {
    return ComponentMock.UICODE;
  }
}