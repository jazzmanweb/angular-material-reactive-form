import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AbstractFormComponent } from '../../../abstract-views/form/abstract-from.component';
import { isPrimitive } from 'util';
import { FormControlModel } from '../../../../model/models/form-control.model';

@Component({
	selector: 'form-control-multiselect',
	templateUrl: './form-control-multiselect.component.html',
	styleUrls: ['./form-control-multiselect.component.css']
})
export class FormControlMultiselectComponent<T> extends AbstractFormComponent {
	@Input() public control: FormControlModel<T>;
	@Input() public form: FormGroup;

	public compareFn(x: T, y: T): boolean {
		if (!x || !y) {
			return false;
		}
		return isPrimitive(x) && isPrimitive(y)
			? x === y
			: x['id'] === y['id'];
	}
}
