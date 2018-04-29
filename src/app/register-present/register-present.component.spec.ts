import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPresentComponent } from './register-present.component';

describe('RegisterPresentComponent', () => {
  let component: RegisterPresentComponent;
  let fixture: ComponentFixture<RegisterPresentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPresentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPresentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
