import Component from "../../component/Component";
import ButtonModel from "./ButtonModel";

export default class Button extends Component<ButtonModel> {
  public static UICODE: String = "BUTTON";
  constructor(id: String) {
    super(id);
  }

  public getUICode(): String {
    return Button.UICODE;
  }
}
