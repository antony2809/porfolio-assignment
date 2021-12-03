import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountChartComponent } from './account-chart.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AccountChartComponent', () => {
  let component: AccountChartComponent;
  let fixture: ComponentFixture<AccountChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountChartComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountChartComponent);
    component = fixture.componentInstance;
    component.history = [{ value: 100 }, { value: 200 }] as any[];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reflect the values when history changes', () => {
    component.ngOnChanges();
    expect(component.chartOptions.series?.[0].data.length).toBe(2);
  });
});
