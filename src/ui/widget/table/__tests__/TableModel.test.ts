import { TableModel } from '../TableModel';

it('test', () => {
  const componentModel = new TableModel();

  expect(componentModel).toBeInstanceOf(TableModel);
});