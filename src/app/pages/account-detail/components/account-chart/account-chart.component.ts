import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sem-account-chart',
  templateUrl: './account-chart.component.html',
  styleUrls: ['./account-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
