import { Component } from '../../../component/Component';
import { Input } from '../Input';
import { InputModel } from '../InputModel';
import { InputView } from '../../../view/input/InputView';
import { UIRegistry } from '../../../UIRegistry';

describe('test Input', () => {
  it('should get the UICODE', () => {
    const component = new Input('Input');

    expect(component.getUICode()).toBe('INPUT');
  });
});

describe('test component inheritance', () => {
  let component: Input;

  beforeEach(() => {
    component = new Input('Input');
    jest.resetModules();
  });

  it('should set/get model', () => {
    const componentModel = new InputModel();

    component.setModel(componentModel);

    expect(component.getModel()).toBe(componentModel);
  });


  it('should set/get parent', () => {
    const parent = new Component('parent');

    component.setParent(parent);

    expect(component.getParent()).toBe(parent);
  });

  describe('getUI', () => {
    it('should get null if the component has no view and is not registered', () => {
      expect(component.getUI()).toBeNull();
    });

    it('should get the view if component is registered', () => {
      let componentView;

      UIRegistry.register(
        Input.UICODE,
        (model: InputModel, id: string) => {
          componentView = new InputView(model, id);

          return componentView;
        }
      );

      expect(component.getUI()).toBe(componentView);
    });
  });

  it('should call repaint', () => {
    const componentModel = new InputModel();
    const componentView = new InputView(componentModel);

    UIRegistry.register(
      Input.UICODE,
      () => componentView
    );

    const spy = jest.spyOn(component.getView(), 'repaint');

    component.getUI();
    component.refreshUI();

    expect(spy).toHaveBeenCalled();

    spy.mockRestore();
  });
});