import { Component } from '../../component/Component';
import { ContainerModel } from './ContainerModel';
import { IContainerView } from '../../view/container/IContainerView';

export class Container extends Component<ContainerModel, IContainerView> {
  static UICODE = 'CONTAINER';
  
  constructor(id: string) {
    super(id);
  }

  getUICode(): string {
    return Container.UICODE;
  }
}
