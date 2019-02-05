import { Component } from '../../../component/Component';
import { CommandBar } from '../CommandBar';
import { CommandBarModel } from '../CommandBarModel';
import { CommandBarView } from '../../../view/commandbar/CommandBarView';
import { UIRegistry } from '../../../UIRegistry';

describe('test CommandBar', () => {
  it('should get the UICODE', () => {
    const component = new CommandBar('CommandBar');

    expect(component.getUICode()).toBe('COMMAND-BAR');
  });
});

describe('test component inheritance', () => {
  let component: CommandBar;

  beforeEach(() => {
    component = new CommandBar('CommandBar');
    jest.resetModules();
  });

  it('should set/get model', () => {
    const componentModel = new CommandBarModel();

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
        CommandBar.UICODE,
        (model: CommandBarModel, id: string) => {
          componentView = new CommandBarView(model, id);

          return componentView;
        }
      );

      expect(component.getUI()).toBe(componentView);
    });
  });

  it('should call repaint', () => {
    const componentModel = new CommandBarModel();
    const componentView = new CommandBarView(componentModel);

    UIRegistry.register(
      CommandBar.UICODE,
      () => componentView
    );

    const spy = jest.spyOn(component.getView(), 'repaint');

    component.getUI();
    component.refreshUI();

    expect(spy).toHaveBeenCalled();

    spy.mockRestore();
  });
});