import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPtComponent } from './show-pt.component';

describe('ShowPtComponent', () => {
  let component: ShowPtComponent;
  let fixture: ComponentFixture<ShowPtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
