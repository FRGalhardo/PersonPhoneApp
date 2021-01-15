import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonPhoneMainComponent } from './person-phone-main.component';

describe('PersonPhoneMainComponent', () => {
  let component: PersonPhoneMainComponent;
  let fixture: ComponentFixture<PersonPhoneMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonPhoneMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonPhoneMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
