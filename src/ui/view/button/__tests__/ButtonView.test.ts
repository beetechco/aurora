import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonView } from '../ButtonView';
import { ButtonModel } from 'ui/widget/button/ButtonModel';
import { testDom } from 'setupTests';
import { ActionListenerMock } from '__mocks__/ActionListenerMock';

describe('constructor', () => {
  let buttonModel: ButtonModel;

  beforeEach(() => {
    buttonModel = new ButtonModel();
  });

  it('should set a random id as default', () => {
    const buttonView = new ButtonView(buttonModel);

    expect(buttonView.getId()).toBeDefined();
  });

  it('should set the id passed as argument', () => {
    const id = 'buttonId';
    const buttonView = new ButtonView(buttonModel, id);

    expect(buttonView.getId()).toBe(id);
  });
});

describe('render component', () => {
  let buttonModel: ButtonModel;

  beforeEach(() => {
    buttonModel = new ButtonModel();
  });

  it('should return a react element', () => {
    const buttonView = new ButtonView(buttonModel);
    const button = buttonView.renderComponent();

    expect(React.isValidElement(button)).toBeTruthy();
  });
});

describe('render view', () => {
  let document: Document;
  let buttonModel: ButtonModel;
  let buttonView: ButtonView;

  beforeEach(() => {
    const dom = testDom();
    document = dom.window.document;

    buttonModel = new ButtonModel();
    buttonView = new ButtonView(buttonModel);
  });

  it('should paint a react element with a label', () => {
    const label = 'label';
    buttonModel.setLabel(label);

    const button: React.ReactElement<{}> = buttonView.paint();

    ReactDOM.render(
      button,
      document.getElementById('root'),
    );

    expect(React.isValidElement(button)).toBeTruthy();

    expect(
      document.getElementById(
        `${buttonView.getId()}`
      ).innerHTML
    ).toBe(label);
  });
});

describe('action listener', () => {
  let document: Document;
  let buttonModel: ButtonModel;
  let buttonView: ButtonView;
  let button: React.ReactElement<{}>;

  beforeEach(() => {
    const dom = testDom();
    document = dom.window.document;

    buttonModel = new ButtonModel();
    buttonView = new ButtonView(buttonModel);
    button = buttonView.paint();

    ReactDOM.render(
      button,
      document.getElementById('root'),
    );
  });

  it('should call action listener on click', () => {
    const actionListener = new ActionListenerMock();
    buttonModel.addActionListener(actionListener); // add listener

    const action = jest.spyOn(actionListener, 'actionPerformed');

    // emulate click
    document.getElementById(
      `${buttonView.getId()}`
    ).click();

    expect(action).toBeCalledTimes(1);
  });
});