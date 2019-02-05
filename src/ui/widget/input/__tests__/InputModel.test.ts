import { InputModel } from '../InputModel';

it('test', () => {
  const componentModel = new InputModel();

  expect(componentModel).toBeInstanceOf(InputModel);
});