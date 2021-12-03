import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { AccountHistory } from '@portfolio/models';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexGrid,
  ApexStroke,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexYAxis,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'sem-account-chart',
  templateUrl: './account-chart.component.html',
  styleUrls: ['./account-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountChartComponent implements OnChanges {
  @Input()
  public history!: AccountHistory[];

  @Input()
  public current: number;

  public chartOptions: Partial<ChartOptions> = {
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: false } },
    },
    yaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    chart: {
      height: 365,
      type: 'area',
      stacked: false,
      zoom: { enabled: false },
      toolbar: { show: false },
    },
  };

  public ngOnChanges() {
    this.chartOptions = {
      ...this.chartOptions,
      series: [
        {
          name: 'Balance',
          data: this.history.map(({ value }) => value),
          color: '#05ab53',
        },
      ],
    };
  }
}
