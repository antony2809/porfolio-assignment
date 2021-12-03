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

  it('should not update the percentage value', () => {
    component.ngOnChanges();
    expect(component.percentage).toBe(0);
  });

  it('should update the percetange value', () => {
    component.current = 400;
    component.account = { goal: 1000 } as any;
    component.ngOnChanges();
    expect(component.percentage).toBe(40);
  });
});
