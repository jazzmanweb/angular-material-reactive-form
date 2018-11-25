import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlTypeEnum } from '../../../model/enums/form.enums';
import { FormControlsInterface } from '../../../model/interfaces/form-controls.interface';
import { AbstractFormComponent } from '../../abstract-form/abstract-from.component';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormGroupComponent extends AbstractFormComponent {
  @Input() public formPath: Array<string | number> = [];
  @Input() public controls: FormControlsInterface;
  @Input() public form: FormGroup;
  public controlTypeEnum = ControlTypeEnum;
}
