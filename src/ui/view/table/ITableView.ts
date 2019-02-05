import { IView } from '../../component/view/IView';
import { Column } from '../../widget/table/Column';

export interface ITableView extends IView {
  setColumns(columns: Column[]): void;
  setData(data: any[]): void;
  setOnSelection(onSelection: Function): void;
  setSelected(selected: any[]): void;
}