import { Component } from 'ui/component/Component';
import { Model } from 'ui/component/model/Model';

export class ComponentMock extends Component<Model> {
  static UICODE = 'COMPONENT_MOCK';
  
  constructor(id: string) {
    super(id);
  }

  getUICode(): string {
    return ComponentMock.UICODE;
  }
}