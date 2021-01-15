import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPtComponent } from './add-edit-pt.component';

describe('AddEditPtComponent', () => {
  let component: AddEditPtComponent;
  let fixture: ComponentFixture<AddEditPtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditPtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
