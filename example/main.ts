import * as JSDOM from 'jsdom';
import * as ReactDOM from 'react-dom';
import { ButtonModel } from 'ui/widget/button/ButtonModel';
import { ButtonView } from 'ui/view/button/ButtonView';
import { CustomButtonView } from './ui/view/button/CustomButtonView';
import ActionListener from 'ui/component/common/ActionListener';
import UIRegistry from 'ui/UIRegistry';
import { Button } from 'ui/widget/button/Button';

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
    <div id ='root'>
    <div>
  </body>
</html>
`);

global.document = dom.window.document;
global.window = dom.window;

//Register UI Views
UIRegistry.register(Button.UICODE as string, (id: string, model: any) => {
  return new ButtonView(id, model);
});

// create listener
const actionListener = new class implements ActionListener {
  actionPerformed(): void {
    console.log('button action');
  }
}();

// create ButtonModel
const buttonModel = new ButtonModel();
buttonModel.setLabel('Label 1');
buttonModel.addActionListener(actionListener);

// create custom button view
const buttonView = new CustomButtonView('button', buttonModel);
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
