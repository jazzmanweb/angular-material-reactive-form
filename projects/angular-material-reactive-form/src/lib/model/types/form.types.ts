import {FormControlModel} from '../models/form-control.model';
import {FormArrayModel} from '../models/form-array.model';
import {FormGroupModel} from '../models/form-group.model';
import {FormHiddenModel} from '../models/form-hidden.model';

export type FormItemType = FormHiddenModel<any> | FormControlModel<any> | FormArrayModel<any> | FormGroupModel<any>;
