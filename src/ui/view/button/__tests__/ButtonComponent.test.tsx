import * as React from 'react';
import { shallow } from 'enzyme';
import { ButtonComponent } from '../ButtonComponent';

it('should change label', () => {
  let label = 'label';
  const buttonRef: any = React.createRef();
  const buttonComponent = shallow(
    <ButtonComponent
      id='testButton'
      ref={buttonRef}
      label={label}
      onAction={() => {}
      }
    />);

  expect(buttonComponent.text()).toBe(label);

  // change label
  label = 'newLabel';
  (buttonComponent.instance() as ButtonComponent).changeLabel(label);

  expect(buttonComponent.text()).toBe(label);

  expect(buttonComponent).toMatchSnapshot();
});

it('should call an action on click', () => {
  const label = 'label';
  const buttonRef: any = React.createRef();
  const onAction = jest.fn();

  const buttonComponent = shallow(
    <ButtonComponent
      id='testButton'
      ref={buttonRef}
      label={label}
      onAction={onAction}
    />);

  buttonComponent.find('button').simulate('click', { preventDefault() {} });

  expect(onAction.mock.calls.length).toBe(1);    
  expect(buttonComponent).toMatchSnapshot();
});