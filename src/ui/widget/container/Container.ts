import Component from '../../component/Component';
import { ContainerModel } from './ContainerModel';

export class Container extends Component<ContainerModel> {
  static UICODE = 'CONTAINER';
  
  constructor(id: string) {
    super(id);
  }

  getUICode(): string {
    return Container.UICODE;
  }
}
