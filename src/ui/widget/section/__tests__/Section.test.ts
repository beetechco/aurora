import { Component } from '../../../component/Component';
import { Section } from '../Section';
import { SectionModel } from '../SectionModel';
import { SectionView } from '../../../view/section/SectionView';
import { UIRegistry } from '../../../UIRegistry';

describe('test Section', () => {
  it('should get the UICODE', () => {
    const component = new Section('Section');

    expect(component.getUICode()).toBe('SECTION');
  });
});

describe('test component inheritance', () => {
  let component: Section;

  beforeEach(() => {
    component = new Section('Section');
    jest.resetModules();
  });

  it('should set/get model', () => {
    const componentModel = new SectionModel();

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
        Section.UICODE,
        (model: SectionModel, id: string) => {
          componentView = new SectionView(model, id);

          return componentView;
        }
      );

      expect(component.getUI()).toBe(componentView);
    });
  });

  it('should call repaint', () => {
    const componentModel = new SectionModel();
    const componentView = new SectionView(componentModel);

    UIRegistry.register(
      Section.UICODE,
      () => componentView
    );

    const spy = jest.spyOn(component.getView(), 'repaint');

    component.getUI();
    component.refreshUI();

    expect(spy).toHaveBeenCalled();

    spy.mockRestore();
  });
});