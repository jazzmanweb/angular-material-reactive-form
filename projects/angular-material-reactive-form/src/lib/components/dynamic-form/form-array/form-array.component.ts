import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AbstractFormComponent } from '../../abstract-form/abstract-from.component';
import { FormArrayModel } from '../../../model/models/form-array.model';
import {
  InputTypeEnum,
  FormControlTypeEnum
} from '../../../model/enums/form.enums';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent<T> extends AbstractFormComponent {
  @Input() public formPath: Array<string | number> = [];
  @Input() public control: FormArrayModel<T>;
  @Input() public form: FormGroup;

  public inputTypeEnum = InputTypeEnum;
  public formControlTypeEnum = FormControlTypeEnum;
}
