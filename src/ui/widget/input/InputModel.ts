import { Component } from '../../component/Component';
import { Model } from '../../component/model/Model';

export class InputModel<T> extends Model {
    private value:T = null;

    getValue = (): T => {
        return this.value;
    }

    setValue = (value: T): void => {
        this.value =value;
    }
}
