import { Component } from '../../../component/Component';
import { Button } from '../Button';
import { ButtonModel } from '../ButtonModel';
import { ComponentViewMock } from '../../../../__mocks__/ComponentViewMock';
import { UIRegistry } from '../../../UIRegistry';

describe('test button', () => {
  it('should get the UICODE', () => {
    const button = new Button('button');

    expect(button.getUICode()).toBe('BUTTON');
  });
});

describe('test component inheritance', () => {
  let button: Button;

  beforeEach(() => {
    button = new Button('button');
    jest.resetModules();
  });

  it('should set/get model', () => {
    const buttonModel = new ButtonModel();

    button.setModel(buttonModel);

    expect(button.getModel()).toBe(buttonModel);
  });


  it('should set/get parent', () => {
    const parent = new Component('parent');

    button.setParent(parent);

    expect(button.getParent()).toBe(parent);
  });

  describe('getUI', () => {
    it('should get null if the component has no view and is not registered', () => {
      expect(button.getUI()).toBeNull();
    });

    it('should get the view if component is registered', () => {
      let buttonView;

      UIRegistry.register(
        Button.UICODE,
        (id: string) => {
          buttonView = new ComponentViewMock(id);

          return buttonView;
        }
      );

      expect(button.getUI()).toBe(buttonView);
    });
  });

  it('should call repaint', () => {
    const buttonView = new ComponentViewMock();

    UIRegistry.register(
      Button.UICODE,
      () => buttonView
    );

    const spy = jest.spyOn(button.getView(), 'repaint');

    button.getUI();
    button.refreshUI();

    expect(spy).toHaveBeenCalled();

    spy.mockRestore();
  });
});


