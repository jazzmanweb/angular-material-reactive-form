import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AbstractFormComponent } from '../../../../abstract-form/abstract-from.component';
import { FormControlModel } from 'projects/angular-material-reactive-form/src/lib/model/models/form-control.model';

@Component({
  selector: 'form-control-textarea',
  templateUrl: './form-control-textarea.component.html',
  styleUrls: ['./form-control-textarea.component.css']
})
export class FormControlTextareaComponent<T> extends AbstractFormComponent {
	@Input() public control: FormControlModel<T>;
	@Input() public form: FormGroup;
}
