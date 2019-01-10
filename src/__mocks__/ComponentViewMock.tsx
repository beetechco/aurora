import * as React from 'react';
import { IView } from '../ui/component/view/IView';
import { View } from '../ui/view/View';
import { Model } from '../ui/component/model/Model';
import { Component } from '../ui/component/Component';

export interface IComponentViewMock extends IView {

}

export class ComponentViewMock extends View implements IComponentViewMock {
  constructor(id?: string) {
    super(id);
  }

  renderComponent = () => {
    return (
      <div
        ref={this.elementRef}
        id={this.getId()}
        key={this.getId()}
      >
      </div>
    );
  }

  repaint = () => {
    
  }
}