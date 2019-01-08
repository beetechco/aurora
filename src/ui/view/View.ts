import * as React from 'react';
import { randomId } from '../Utils';
import { IView } from '../component/view/IView';

export abstract class View {
  id: string;
  elementRef: React.RefObject<any>;
  parent: IView;
  view: any;

  constructor(id: string) {
    if (id) {
      this.id = id;
    } else {
      this.id = randomId();
    }
  }

  getId(): string {
    if (this.parent) {
      return `${this.parent.getId()}::${this.id}`;
    }
    return this.id;
  }

  getElementReference(): React.RefObject<any>{
    return this.elementRef;
  }

  paint = () => {
    if (!this.view) {
      this.elementRef = React.createRef();
      this.view = this.renderComponent();
    }
    return this.view;
  }

  abstract renderComponent(): any;

  abstract repaint(): void;

  setParent(parent: IView): void {
    this.parent = parent;
  }
}
