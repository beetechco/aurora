import { CommandBarModel } from '../CommandBarModel';

it('test', () => {
  const componentModel = new CommandBarModel();

  expect(componentModel).toBeInstanceOf(CommandBarModel);
});