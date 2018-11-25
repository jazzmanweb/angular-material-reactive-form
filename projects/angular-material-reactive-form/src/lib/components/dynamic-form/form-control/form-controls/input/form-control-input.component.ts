import { Component, Input } from '@angular/core';
import { AbstractFormComponent } from '../../../abstract-views/form/abstract-from.component';
import { FormGroup } from '@angular/forms';
import { FormControlModel } from '../../../../model/models/form-control.model';

@Component({
  selector: 'form-control-input',
  templateUrl: './form-control-input.component.html',
  styleUrls: ['./form-control-input.component.css']
})
export class FormControlInputComponent<T> extends AbstractFormComponent {
	@Input() public control: FormControlModel<T>;
	@Input() public form: FormGroup;
}
