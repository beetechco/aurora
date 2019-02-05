import { Component } from '../../component/Component';
import { Model } from '../../component/model/Model';

export class InputModel<T> extends Model {
    private editable: boolean = true;
    private value: T = null;

    getEditable(): boolean {
        return this.editable;
    }

    getValue = (): T => {
        return this.value;
    }

    setEditable(editable: boolean): void {
        this.editable = editable;
    }

    setValue = (value: T): void => {
        this.value = value;
    }
}
