import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfLoginCallbackComponent } from './sf-login-callback.component';

describe('SfLoginCallbackComponent', () => {
  let component: SfLoginCallbackComponent;
  let fixture: ComponentFixture<SfLoginCallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SfLoginCallbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SfLoginCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
