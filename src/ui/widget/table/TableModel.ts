import { Component } from '../../component/Component';
import { Model } from '../../component/model/Model';
import { Column } from './Column';
import { timingSafeEqual } from 'crypto';

export class TableModel extends Model {
  private columns: Column[] = [];
  private data: any[] = [];
  private selected: any[] = [];

  addColumn(column: Column): void {
    this.columns.push(column);
  }

  addSelected(selected: any): void {
    this.selected.push(selected);
  }

  getColumns(): Column[] {
    return this.columns;
  }

  getData(): any[] {
    return this.data;
  }

  getSelected(): any[] {
    return this.selected;
  }

  setData(data: any[]): void {
    this.data = data;
  }

}
