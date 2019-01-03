import { Component } from 'ui/component/Component';
import { Container } from '../Container';
import { ContainerModel } from '../ContainerModel';
import { ContainerView } from 'ui/view/container/ContainerView';
import { UIRegistry } from 'ui/UIRegistry';

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
        (model: ContainerModel, id: string) => {
          containerView = new ContainerView(model, id);

          return containerView;
        }
      );

      expect(container.getUI()).toBe(containerView);
    });
  });

  it('should call repaint', () => {
    const containerModel = new ContainerModel();
    const containerView = new ContainerView(containerModel);

    UIRegistry.register(
      Container.UICODE,
      () => containerView
    );

    const spy = jest.spyOn(containerView, 'repaint');

    container.getUI();
    container.refreshUI();

    expect(spy).toHaveBeenCalled();

    spy.mockRestore();
  });
});


