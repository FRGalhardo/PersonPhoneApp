import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPpmComponent } from './add-edit-ppm.component';

describe('AddEditPpmComponent', () => {
  let component: AddEditPpmComponent;
  let fixture: ComponentFixture<AddEditPpmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPpmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
