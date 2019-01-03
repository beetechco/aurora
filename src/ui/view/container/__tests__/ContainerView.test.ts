import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ContainerView } from '../ContainerView';
import { ContainerModel } from 'ui/widget/container/ContainerModel';
import { testDom } from 'setupTests';
import { ComponentMock } from '__mocks__/ComponentMock';
import { ComponentViewMock } from '__mocks__/ComponentViewMock';
import { Model } from 'ui/component/model/Model';
import { UIRegistry } from 'ui/UIRegistry';

describe('constructor', () => {
  let containerModel: ContainerModel;

  beforeEach(() => {
    containerModel = new ContainerModel();
  });

  it('should set a random id as default', () => {
    const containerView = new ContainerView(containerModel);

    expect(containerView.getId()).toBeDefined();
  });

  it('should set the id passed as argument', () => {
    const id = 'coontainerId';
    const containerView = new ContainerView(containerModel, id);

    expect(containerView.getId()).toBe(id);
  });
});

describe('render component', () => {
  let containerModel: ContainerModel;

  beforeEach(() => {
    containerModel = new ContainerModel();
  });

  it('should return a react element', () => {
    const containerView = new ContainerView(containerModel);
    const container = containerView.renderComponent();

    expect(React.isValidElement(container)).toBeTruthy();
  });
});

describe('render view', () => {
  let document: Document;
  let containerModel: ContainerModel;
  let containerView: ContainerView;

  beforeEach(() => {
    const dom = testDom();
    document = dom.window.document;

    containerModel = new ContainerModel();
    containerView = new ContainerView(containerModel);
  });

  it('should paint a react element', () => {
    const container: React.ReactElement<{}> = containerView.paint();

    ReactDOM.render(
      container,
      document.getElementById('root'),
    );

    expect(React.isValidElement(container)).toBeTruthy();
  });

  it('should paint a react element with two elements as children', () => {
    const element1 = new ComponentMock('e1');
    const element2 = new ComponentMock('e2');

    containerModel.addElement(element1);
    containerModel.addElement(element2);

    UIRegistry.register(
      ComponentMock.UICODE,
      (model: Model, id: string) => 
        new ComponentViewMock(model, id)
    );

    const container: React.ReactElement<{}> = containerView.paint();

    ReactDOM.render(
      container,
      document.getElementById('root'),
    );

    expect(
      document.getElementById(
        `${containerView.getId()}`
      ).children.length
    ).toBe(2);
  });
});