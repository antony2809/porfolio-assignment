import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountInvitationsComponent } from './account-invitations.component';

describe('AccountInvitationsComponent', () => {
  let component: AccountInvitationsComponent;
  let fixture: ComponentFixture<AccountInvitationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountInvitationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountInvitationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
