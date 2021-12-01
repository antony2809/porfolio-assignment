import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsLandingComponent } from './accounts-landing.component';

describe('AccountsLandingComponent', () => {
  let component: AccountsLandingComponent;
  let fixture: ComponentFixture<AccountsLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
