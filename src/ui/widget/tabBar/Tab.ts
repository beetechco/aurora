import { IModel } from "../../component/model/IModel";
import { IView } from "../../..";
import { Component } from "../../component/Component";

export class Tab {
  private content?: Component<IModel, IView>;
  private id: string;
  private title: string;

  constructor(id: string, title: string, content: Component<IModel, IView>){
    this.id = id;
    this.title = title;
    this.content = content;
  }

  getContent = (): Component<IModel, IView> => {
    return this.content;
  }

  getId = (): string => {
    return this.id;
  }

  getTitle = (): string => {
    return this.title;
  }

}