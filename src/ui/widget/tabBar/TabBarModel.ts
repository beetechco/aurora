import { Component } from '../../component/Component';
import { Model } from '../../component/model/Model';
import { Tab } from './Tab';

export class TabBarModel extends Model {
  private selectedTab: string;
  private tabs:Tab[] = [];

  addTab(tab:Tab): void {
    this.tabs.push(tab);
  }

  setSelectedTab(selectedTab: string): void {
    this.selectedTab = selectedTab;
  }

  getSelectedTab(): string {
    return this.selectedTab;
  }

  getTabs(): Tab[] {
    return this.tabs;
  }
}
