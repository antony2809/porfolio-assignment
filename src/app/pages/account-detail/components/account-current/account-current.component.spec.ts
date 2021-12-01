import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCurrentComponent } from './account-current.component';

describe('AccountCurrentComponent', () => {
  let component: AccountCurrentComponent;
  let fixture: ComponentFixture<AccountCurrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountCurrentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
