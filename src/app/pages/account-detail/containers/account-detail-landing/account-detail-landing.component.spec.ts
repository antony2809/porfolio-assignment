import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDetailLandingComponent } from './account-detail-landing.component';

describe('AccountDetailLandingComponent', () => {
  let component: AccountDetailLandingComponent;
  let fixture: ComponentFixture<AccountDetailLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountDetailLandingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDetailLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
