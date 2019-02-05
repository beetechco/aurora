import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { InputView } from '../InputView';
import { InputModel } from '../../../widget/input/InputModel';
import { testDom } from '../../../../setupTests';
import { ActionListenerMock } from '../../../../__mocks__/ActionListenerMock';

describe('constructor', () => {
  let componentModel: InputModel;

  beforeEach(() => {
    componentModel = new InputModel();
  });

  it('should set a random id as default', () => {
    const componentView = new InputView(componentModel);

    expect(componentView.getId()).toBeDefined();
  });

  it('should set the id passed as argument', () => {
    const id = 'InputId';
    const componentView = new InputView(componentModel, id);

    expect(componentView.getId()).toBe(id);
  });
});

describe('render component', () => {
  let componentModel: InputModel;

  beforeEach(() => {
    componentModel = new InputModel();
  });

  it('should return a react element', () => {
    const componentView = new InputView(componentModel);
    const component = componentView.renderComponent();

    expect(React.isValidElement(component)).toBeTruthy();
  });
});

describe('render view', () => {
  let document: Document;
  let componentModel: InputModel;
  let componentView: InputView;

  beforeEach(() => {
    const dom = testDom();
    document = dom.window.document;

    componentModel = new InputModel();
    componentView = new InputView(componentModel);
  });

  it('should paint a react element', () => {
    const component: React.ReactElement<{}> = componentView.paint();

    ReactDOM.render(
      component,
      document.getElementById('root'),
    );

    expect(React.isValidElement(component)).toBeTruthy();
  });
});