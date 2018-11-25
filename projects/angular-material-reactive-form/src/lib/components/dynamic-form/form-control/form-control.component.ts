import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AbstractFormComponent } from '../../abstract-form/abstract-from.component';
import { FormControlModel } from '../../../model/models/form-control.model';
import {
  InputTypeEnum,
  FormControlTypeEnum
} from '../../../model/enums/form.enums';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent<T> extends AbstractFormComponent {
  @Input() public formPath: Array<string | number> = [];
  @Input() public control: FormControlModel<T>;
  @Input() public form: FormGroup;

  public inputTypeEnum = InputTypeEnum;
  public formControlTypeEnum = FormControlTypeEnum;
}
