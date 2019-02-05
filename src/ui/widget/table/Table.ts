import { Component } from '../../component/Component';
import { TableModel } from './TableModel';
import { ITableView } from '../../view/table/ITableView';

export class Table extends Component<TableModel, ITableView> {
  static UICODE = 'TABLE';

  constructor(id: string) {
    super(id);
  }

  getUICode(): string {
    return Table.UICODE;
  }

  init() {
    this.getView().setColumns(this.getModel().getColumns());
    this.getView().setData(this.getModel().getData());
    this.getView().setOnSelection(this.onSelection);
  }

  onSelection = (key: any): void => {
    console.log(' table selection >', key);
    if (key && this.getModel().getData()) {
      const selected = this.getModel().getData().filter(x => x['id'] === key);
      if (selected && selected.length > 0) {
        let index = -1;
        for (let i = 0; i < this.getModel().getSelected().length; i = i + 1) {
          if (this.getModel().getSelected()[i]['id'] === key) {
            index = i;
            break;
          }
        }
        if (index == -1) {
          this.getModel().addSelected(selected[0]);
        } else {
          this.getModel().getSelected().splice(index, 1);
        }
        this.refresh();
      }
    }
  }

  sync() {
    this.getView().setData(this.getModel().getData());
    this.getView().setSelected(this.getModel().getSelected());
  }
}
