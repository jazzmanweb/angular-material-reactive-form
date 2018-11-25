import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialReactiveFormComponent } from './angular-material-reactive-form.component';

describe('AngularMaterialReactiveFormComponent', () => {
  let component: AngularMaterialReactiveFormComponent;
  let fixture: ComponentFixture<AngularMaterialReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularMaterialReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularMaterialReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
