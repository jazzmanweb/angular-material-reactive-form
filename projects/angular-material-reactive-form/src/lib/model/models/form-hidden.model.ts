import { ControlTypeEnum } from '../enums/form.enums';
import { FormItemInterface } from '../interfaces/form-item.interface';
import { FormControlModel } from './form-control.model';

export class FormHiddenModel<T> extends FormControlModel<T>
	implements FormItemInterface<T> {
	constructor(options: FormItemInterface<T> = {} as FormItemInterface<T>) {
		options = options || ({} as FormItemInterface<T>);
		super(options);
		this.controlType = ControlTypeEnum.FormHidden;
	}
}
