import * as React from 'react';
import { IView } from 'ui/component/view/IView';
import { View } from '../View';
import { ButtonModel } from 'ui/widget/button/ButtonModel';
import { ActionListener } from 'ui/component/common/ActionListener';
import { ButtonComponent } from './ButtonComponent';

export class ButtonView extends View implements IView<ButtonModel> {
  model: ButtonModel;
  view: any;
  elementRef: React.RefObject<any>;

  constructor(model: ButtonModel, id?: string) {
    super(id);
    this.model = model;
  }

  onAction = () => {
    if (this.model.getActionListeners()) {
      this.model
        .getActionListeners()
        .forEach((actionListener: ActionListener) =>
          actionListener.actionPerformed()
        );
    }
  };

  renderComponent = () => {
    return (
      <ButtonComponent
        ref={this.elementRef}
        id={this.getId()}
        label={this.model.getLabel()}
        onAction={this.onAction}
      />
    );
  }

  paint = () => {
    if (!this.view) {
      this.elementRef = React.createRef();
      this.view = this.renderComponent();
    }

    return this.view;
  }

  repaint = () => {
    if (this.elementRef && this.elementRef.current) {
      this.elementRef.current.changeLabel(this.model.getLabel());
    }
  }
}
