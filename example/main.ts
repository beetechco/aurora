import * as JSDOM from "jsdom";
import * as ReactDOM from "react-dom";
import ButtonModel from "ui/widget/button/ButtonModel";
import ButtonView from "./ui/view/button/ButtonView";
import ActionListener from "ui/component/common/ActionListener";
import ContainerView from "./ui/view/container/ContainerView";
import ContainerModel from "ui/widget/container/ContainerModel";
import UIRegistry from "ui/UIRegistry";
import Button from "ui/widget/button/Button";
import IView from "ui/component/view/IView";
import ContainerComponent from "ui/widget/container/ContainerComponent";

declare global {
  namespace NodeJS {
    interface Global {
      document: any;
      window: any;
      navigator: any;
    }
  }
}

const dom = new JSDOM.JSDOM(`
<!doctype html>
<html>
  <body>
    <div id ="root">
    <div>
  </body>
</html>
`);

global.document = dom.window.document;
global.window = dom.window;

//Register UI Views
UIRegistry.register(Button.UICODE as string, (id: String, model: any) => {
  return new ButtonView(id, model);
});

UIRegistry.register(
  ContainerComponent.UICODE as string,
  (id: String, model: any) => {
    return new ContainerView(id, model);
  }
);

// create listener
const actionListener = new class implements ActionListener {
  public actionPerformed(): void {
    console.log("button action");
  }
}();

// create ButtonModel
const buttonModel = new ButtonModel();
buttonModel.setLabel("Label 1");
buttonModel.addActionListener(actionListener);

// create button view
const buttonView = new ButtonView("button", buttonModel);
console.log("button:", buttonModel, buttonView);

// render
ReactDOM.render(buttonView.paint(), dom.window.document.getElementById("root"));
console.log(dom.window.document.body.innerHTML);

// change button label
buttonModel.setLabel("Label 2");
buttonView.repaint();
console.log(dom.window.document.body.innerHTML);

// click button
const button = dom.window.document.getElementById(
  `${buttonView.getId()}:button`
);
button.click();

// create container model
const containerModel = new ContainerModel();

// create container view
const containerView = new ContainerView("container", containerModel);

// render
ReactDOM.render(
  containerView.paint(),
  dom.window.document.getElementById("root")
);
console.log(dom.window.document.body.innerHTML);

// create component
const buttonComponent = new Button("buttoncomponent");
buttonComponent.setModel(buttonModel);
// render
ReactDOM.render(
  buttonComponent.getUI().paint(),
  dom.window.document.getElementById("root")
);
console.log(dom.window.document.body.innerHTML);

// create component container
const containerComponent = new ContainerComponent("containercomponent");
containerComponent.setModel(containerModel);

const buttonComponentContainer = new Button("buttoncomponentcontainer");
buttonComponentContainer.setModel(buttonModel);

buttonComponentContainer.setParent(containerComponent);
containerModel.addElement(buttonComponentContainer);

// render
ReactDOM.render(
  containerComponent.getUI().paint(),
  dom.window.document.getElementById("root")
);
console.log(dom.window.document.body.innerHTML);

const buttonComponentContainer2 = new Button("buttoncomponentcontainerdos");
buttonComponentContainer2.setModel(buttonModel);

buttonComponentContainer2.setParent(containerComponent);
containerModel.addElement(buttonComponentContainer2);

containerComponent.getUI().repaint();

// render
ReactDOM.render(
  containerComponent.getUI().paint(),
  dom.window.document.getElementById("root")
);
console.log(dom.window.document.body.innerHTML);
