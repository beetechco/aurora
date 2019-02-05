import { Component } from '../../../component/Component';
import { Table } from '../Table';
import { TableModel } from '../TableModel';
import { TableView } from '../../../view/table/TableView';
import { UIRegistry } from '../../../UIRegistry';

describe('test Table', () => {
  it('should get the UICODE', () => {
    const component = new Table('Table');

    expect(component.getUICode()).toBe('TABLE');
  });
});

describe('test component inheritance', () => {
  let component: Table;

  beforeEach(() => {
    component = new Table('Table');
    jest.resetModules();
  });

  it('should set/get model', () => {
    const componentModel = new TableModel();

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
        Table.UICODE,
        (model: TableModel, id: string) => {
          componentView = new TableView(model, id);

          return componentView;
        }
      );

      expect(component.getUI()).toBe(componentView);
    });
  });

  it('should call repaint', () => {
    const componentModel = new TableModel();
    const componentView = new TableView(componentModel);

    UIRegistry.register(
      Table.UICODE,
      () => componentView
    );

    const spy = jest.spyOn(component.getView(), 'repaint');

    component.getUI();
    component.refreshUI();

    expect(spy).toHaveBeenCalled();

    spy.mockRestore();
  });
});