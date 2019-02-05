import { Component } from '../../component/Component';
import { Model } from '../../component/model/Model';
import { ButtonModel, IView, Button } from '../../..';
import { IModel } from '../../component/model/IModel';

export class SectionModel extends Model {
  private commands: ButtonModel[] = [];
  private content: Component<IModel, IView>;
  private collapsible: boolean;
  private title: string;

  addCommand(buttonModel: ButtonModel): void {
    this.commands.push(buttonModel);
  }

  getCommands(): ButtonModel[] {
    return this.commands;
  }

  getContent(): Component<IModel, IView> {
    return this.content;
  }

  getCollapsible(): boolean {
    return this.collapsible;
  }

  getTitle(): string {
    return this.title;
  }

  setContent(content: Component<IModel, IView>): void {
    this.content = content;
  }

  setCollapsible(collapsible: boolean): void {
    this.collapsible = collapsible;
  }

  setTitle(title: string): void {
    this.title = title;
  }


}
