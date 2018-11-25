import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularMaterialReactiveFormComponent } from './angular-material-reactive-form.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { FormArrayComponent } from './components/dynamic-form/form-array/form-array.component';
import { FormControlComponent } from './components/dynamic-form/form-control/form-control.component';
import { FormControlCheckboxComponent } from './components/dynamic-form/form-control/form-controls/checkbox/form-control-checkbox.component';
import { FormControlImageUploaderComponent } from './components/dynamic-form/form-control/form-controls/image-uploader/form-control-image-uploader.component';
import { FormControlInputComponent } from './components/dynamic-form/form-control/form-controls/input/form-control-input.component';
import { FormControlMultiselectComponent } from './components/dynamic-form/form-control/form-controls/multiselect/form-control-multiselect.component';
import { FormControlSelectComponent } from './components/dynamic-form/form-control/form-controls/select/form-control-select.component';
import { FormControlTextareaComponent } from './components/dynamic-form/form-control/form-controls/textarea/form-control-textarea.component';
import { FormGroupComponent } from './components/dynamic-form/form-group/form-group.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import {
	MatAutocompleteModule,
	MatBadgeModule,
	MatBottomSheetModule,
	MatButtonModule,
	MatButtonToggleModule,
	MatCardModule,
	MatCheckboxModule,
	MatChipsModule,
	MatStepperModule,
	MatDatepickerModule,
	MatDialogModule,
	MatDividerModule,
	MatExpansionModule,
	MatGridListModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatMenuModule,
	MatNativeDateModule,
	MatPaginatorModule,
	MatProgressBarModule,
	MatProgressSpinnerModule,
	MatRadioModule,
	MatRippleModule,
	MatSelectModule,
	MatSidenavModule,
	MatSliderModule,
	MatSlideToggleModule,
	MatSnackBarModule,
	MatSortModule,
	MatTableModule,
	MatTabsModule,
	MatToolbarModule,
	MatTooltipModule,
	MatTreeModule
  } from '@angular/material';

const COMPONENTS = [
	AngularMaterialReactiveFormComponent,
	DynamicFormComponent,
	FormGroupComponent,
	FormArrayComponent,
	FormControlComponent,
	FormControlInputComponent,
	FormControlCheckboxComponent,
	FormControlSelectComponent,
	FormControlMultiselectComponent,
	FormControlImageUploaderComponent,
	FormControlInputComponent,
	FormControlTextareaComponent
];

const MATERIAL_MODULES = [
	MatAutocompleteModule,
	MatBadgeModule,
	MatBottomSheetModule,
	MatButtonModule,
	MatButtonToggleModule,
	MatCardModule,
	MatCheckboxModule,
	MatChipsModule,
	MatStepperModule,
	MatDatepickerModule,
	MatDialogModule,
	MatDividerModule,
	MatExpansionModule,
	MatGridListModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatMenuModule,
	MatNativeDateModule,
	MatPaginatorModule,
	MatProgressBarModule,
	MatProgressSpinnerModule,
	MatRadioModule,
	MatRippleModule,
	MatSelectModule,
	MatSidenavModule,
	MatSliderModule,
	MatSlideToggleModule,
	MatSnackBarModule,
	MatSortModule,
	MatTableModule,
	MatTabsModule,
	MatToolbarModule,
	MatTooltipModule,
	MatTreeModule
];

const MODULES = [
	CommonModule,
	FormsModule,
	FileUploadModule,
	ReactiveFormsModule
];

@NgModule({
	declarations: [COMPONENTS],
	imports: [MODULES, MATERIAL_MODULES],
	exports: [MODULES, COMPONENTS],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AngularMaterialReactiveFormModule {}
