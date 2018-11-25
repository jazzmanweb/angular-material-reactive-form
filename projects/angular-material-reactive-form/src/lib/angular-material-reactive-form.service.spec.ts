import { TestBed } from '@angular/core/testing';

import { AngularMaterialReactiveFormService } from './angular-material-reactive-form.service';

describe('AngularMaterialReactiveFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularMaterialReactiveFormService = TestBed.get(AngularMaterialReactiveFormService);
    expect(service).toBeTruthy();
  });
});
