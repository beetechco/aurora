import * as JSDOM from 'jsdom';
import * as ReactDOM from 'react-dom';
import { ButtonModel } from 'ui/widget/button/ButtonModel';
import { ButtonView } from 'ui/view/button/ButtonView';
import { CustomButtonView } from './ui/view/button/CustomButtonView';
import { ContainerModel } from 'ui/widget/container/ContainerModel';
import { ContainerView } from 'ui/view/container/ContainerView';
import { CustomContainerView } from './ui/view/container/CustomContainerView';
import { IActionListener } from 'ui/component/common/IActionListener';
import { UIRegistry } from 'ui/UIRegistry';
import { Button } from 'ui/widget/button/Button';
import { Container } from 'ui/widget/container/Container';

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
    <div id='root'>
    <div>
  </body>
</html>
`);

global.document = dom.window.document;
global.window = dom.window;

//Register UI Views
UIRegistry.register(
  Button.UICODE as string,
  (model: any, id: string) => {
    return new CustomButtonView(model, id);
  });

UIRegistry.register(
  Container.UICODE as string,
  (model: any, id: string) => {
    return new CustomContainerView(model, id);
  }
);

// create listener
const actionListener = new class implements IActionListener {
  actionPerformed(): void {
    console.log('button action');
  }
}();

// create ButtonModel
const buttonModel = new ButtonModel();
buttonModel.setLabel('Label 1');
buttonModel.addActionListener(actionListener);

// create custom button view
const buttonView = new CustomButtonView(buttonModel, 'button');
console.log('button:', buttonModel, buttonView);

// render
ReactDOM.render(buttonView.paint(), dom.window.document.getElementById('root'));
console.log(dom.window.document.body.innerHTML);

// change button label
buttonModel.setLabel('Label 2');
buttonView.repaint();
console.log(dom.window.document.body.innerHTML);

// click button
const button = dom.window.document.getElementById(
  `${buttonView.getId()}:button`
);
button.click();

/* Container */

// create container model
const containerModel = new ContainerModel();

// create container view
const containerView = new CustomContainerView(containerModel, 'container');

// render
ReactDOM.render(
  containerView.paint(),
  dom.window.document.getElementById('root')
);
console.log(dom.window.document.body.innerHTML);

// create component
const buttonComponent = new Button('buttoncomponent');
buttonComponent.setModel(buttonModel);
// render
ReactDOM.render(
  buttonComponent.getUI().paint(),
  dom.window.document.getElementById('root')
);
console.log(dom.window.document.body.innerHTML);

// create component container
const containerComponent = new Container('containercomponent');
containerComponent.setModel(containerModel);

const buttonComponentContainer = new Button('buttoncomponentcontainer');
buttonComponentContainer.setModel(buttonModel);

buttonComponentContainer.setParent(containerComponent);
containerModel.addElement(buttonComponentContainer);

// render
ReactDOM.render(
  containerComponent.getUI().paint(),
  dom.window.document.getElementById('root')
);
console.log(dom.window.document.body.innerHTML);

const buttonComponentContainer2 = new Button('buttoncomponentcontainer2');
buttonComponentContainer2.setModel(buttonModel);

buttonComponentContainer2.setParent(containerComponent);
containerModel.addElement(buttonComponentContainer2);

containerComponent.getUI().repaint();

// render
ReactDOM.render(
  containerComponent.getUI().paint(),
  dom.window.document.getElementById('root')
);
console.log(dom.window.document.body.innerHTML);