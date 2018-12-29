import Component from "../../component/Component";
import ContainerModel from "./ContainerModel";

export default class ContainerComponent extends Component<ContainerModel> {
  public static UICODE: String = "CONTAINER";
  constructor(id: String) {
    super(id);
  }

  public getUICode(): String {
    return ContainerComponent.UICODE;
  }
}
