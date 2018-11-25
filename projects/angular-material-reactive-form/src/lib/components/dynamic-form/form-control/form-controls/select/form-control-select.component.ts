import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AbstractFormComponent } from '../../../../abstract-form/abstract-from.component';
import { FormControlModel } from 'projects/angular-material-reactive-form/src/lib/model/models/form-control.model';

@Component({
  selector: 'form-control-select',
  templateUrl: './form-control-select.component.html',
  styleUrls: ['./form-control-select.component.css']
})
export class FormControlSelectComponent<T> extends AbstractFormComponent {
  @Input() public control: FormControlModel<T>;
  @Input() public form: FormGroup;

  public compareFn(x: T, y: T): boolean {
    return this.isPrimitive(x) && this.isPrimitive(y)
      ? x === y
      : x['id'] === y['id'];
  }
}
