import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorcardComponent } from './errorcard.component';

describe('ErrorcardComponent', () => {
  let component: ErrorcardComponent;
  let fixture: ComponentFixture<ErrorcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
