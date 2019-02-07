import { IInputView } from '../input/IInputView';
import { Option } from '../../widget/options/Option';

export interface IOptionsView<T> extends IInputView<T> {
    setOptions(options: Option[]): void;

}