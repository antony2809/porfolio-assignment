import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountGoalComponent } from './account-goal.component';

describe('AccountGoalComponent', () => {
  let component: AccountGoalComponent;
  let fixture: ComponentFixture<AccountGoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountGoalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
