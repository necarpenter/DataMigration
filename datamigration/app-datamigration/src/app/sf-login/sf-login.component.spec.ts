import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfLoginComponent } from './sf-login.component';

describe('SfLoginComponent', () => {
  let component: SfLoginComponent;
  let fixture: ComponentFixture<SfLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SfLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SfLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
