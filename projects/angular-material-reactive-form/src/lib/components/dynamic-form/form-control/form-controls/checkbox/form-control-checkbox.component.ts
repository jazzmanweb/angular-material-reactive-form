import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AbstractFormComponent } from '../../../../abstract-form/abstract-from.component';
import { FormControlModel } from 'projects/angular-material-reactive-form/src/lib/model/models/form-control.model';

@Component({
  selector: 'form-control-checkbox',
  templateUrl: './form-control-checkbox.component.html',
  styleUrls: ['./form-control-checkbox.component.css']
})
export class FormControlCheckboxComponent<T> extends AbstractFormComponent {
  @Input() public control: FormControlModel<T>;
  @Input() public form: FormGroup;
}
