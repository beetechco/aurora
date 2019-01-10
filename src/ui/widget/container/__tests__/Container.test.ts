import { Component } from '../../../component/Component';
import { Container } from '../Container';
import { ContainerModel } from '../ContainerModel';
import { ComponentViewMock } from '../../../../__mocks__/ComponentViewMock';
import { UIRegistry } from '../../../UIRegistry';

describe('test button', () => {
  it('should get the UICODE', () => {
    const container = new Container('container');

    expect(container.getUICode()).toBe('CONTAINER');
  });
});

describe('test component inheritance', () => {
  let container: Container;

  beforeEach(() => {
    container = new Container('button');
    jest.resetModules();
  });

  it('should set/get model', () => {
    const containerModel = new ContainerModel();

    container.setModel(containerModel);

    expect(container.getModel()).toBe(containerModel);
  });


  it('should set/get parent', () => {
    const parent = new Component('parent');

    container.setParent(parent);

    expect(container.getParent()).toBe(parent);
  });

  describe('getUI', () => {
    it('should get null if the component has no view and is not registered', () => {
      expect(container.getUI()).toBeNull();
    });

    it('should get the view if component is registered', () => {
      let containerView;

      UIRegistry.register(
        Container.UICODE,
        (id: string) => {
          containerView = new ComponentViewMock(id);

          return containerView;
        }
      );

      expect(container.getUI()).toBe(containerView);
    });
  });

  it('should call repaint', () => {
    const containerModel = new ContainerModel();
    const containerView = new ComponentViewMock();

    UIRegistry.register(
      Container.UICODE,
      () => containerView
    );

    const spy = jest.spyOn(container.getView(), 'repaint');

    container.getUI();
    container.refreshUI();

    expect(spy).toHaveBeenCalled();

    spy.mockRestore();
  });
});


