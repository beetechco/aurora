import * as JSDOM from 'jsdom';
import * as ReactDOM from 'react-dom';
import ButtonModel from 'ui/widget/button/ButtonModel';
import ButtonView from './ui/view/button/ButtonView';

declare global {
  namespace NodeJS {
    interface Global {
      document: any,
      window: any,
      navigator: any,
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
</html>`
);

global.document = dom.window.document;
global.window = dom.window;

// create ButtonModel
const buttonModel = new ButtonModel();
buttonModel.setLabel('Label 1');

// create button view
const buttonView = new ButtonView(buttonModel);
console.log('button:', buttonModel, buttonView);

// render
ReactDOM.render(buttonView.paint(), dom.window.document.getElementById('root'));
console.log(dom.window.document.body.innerHTML);

// change button label
buttonModel.setLabel('Label 2');
buttonView.repaint();
console.log(dom.window.document.body.innerHTML);

// click button
const boton = dom.window.document.getElementById('button');
boton.click();






