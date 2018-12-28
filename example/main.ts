import * as JSDOM from 'jsdom';
import * as ReactDOM from 'react-dom';
import ButtonModel from 'ui/widget/button/ButtonModel';
import ButtonView from './ui/view/button/ButtonView';
console.log('iniciando example');

console.log('iniciando dom');

declare global {
  namespace NodeJS {
    interface Global {
      document: any,
      window: any,
      navigator: any,
    }
  }
}

const dom = new JSDOM.JSDOM('<!doctype html><html><body><div id ="root"><div></body></html>');

global.document = dom.window.document;
global.window = dom.window;

const model = new ButtonModel();
model.setLabel('Aceptar');

const buttonView = new ButtonView(model);



console.log('button:', model, buttonView);
ReactDOM.render(buttonView.paint(), dom.window.document.getElementById('root'));
console.log(dom.window.document.body.innerHTML);
model.setLabel('Cambio');
buttonView.repaint();
console.log(dom.window.document.body.innerHTML);
const boton = dom.window.document.getElementById('boton');
boton.click();






