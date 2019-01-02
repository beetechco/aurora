import { ButtonModel } from '../ButtonModel';
import { ActionListenerMock } from '__mocks__/ActionListenerMock';

const buttonModel = new ButtonModel();

describe('label', () => {
  it('set/get label', () => {
    const label = 'buttonLabel';

    buttonModel.setLabel(label);

    expect(buttonModel.getLabel()).toBe(label);
  });
});

describe('add/get action listeners', () => {
  const actionListener1 = new ActionListenerMock();

  it('should add a listener and return an array with the listener', () => {
    buttonModel.addActionListener(actionListener1);
    
    const listeners = buttonModel.getActionListeners();

    expect(listeners.length).toEqual(1);
    expect(listeners[0]).toBe(actionListener1);
  });

  it('should add a second listener and return an array with the two listeners', () => {
    const actionListener2 = new ActionListenerMock();

    buttonModel.addActionListener(actionListener2);

    const listeners = buttonModel.getActionListeners();
    
    expect(listeners.length).toEqual(2);
    expect(listeners[0]).toBe(actionListener1);
    expect(listeners[1]).toBe(actionListener2);
  });
});