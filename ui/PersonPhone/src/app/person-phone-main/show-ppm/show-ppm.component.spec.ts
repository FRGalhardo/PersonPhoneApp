import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPpmComponent } from './show-ppm.component';

describe('ShowPpmComponent', () => {
  let component: ShowPpmComponent;
  let fixture: ComponentFixture<ShowPpmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPpmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
