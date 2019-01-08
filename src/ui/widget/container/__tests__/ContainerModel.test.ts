import { ContainerModel } from '../ContainerModel';
import { ComponentMock } from '../../../../__mocks__/ComponentMock';

const containerModel = new ContainerModel();

describe('add/get action listeners', () => {
  const component1 = new ComponentMock('c1');

  it('should add an element and return an array with the element', () => {
    containerModel.addElement(component1);
    
    const listeners = containerModel.getElements();

    expect(listeners.length).toEqual(1);
    expect(listeners[0]).toBe(component1);
  });

  it('should add a second listener and return an array with the two listeners', () => {
    const component2 = new ComponentMock('c2');

    containerModel.addElement(component2);

    const elements = containerModel.getElements();
    
    expect(elements.length).toEqual(2);
    expect(elements[0]).toBe(component1);
    expect(elements[1]).toBe(component2);
  });
});