import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sem-account-header',
  templateUrl: './account-header.component.html',
  styleUrls: ['./account-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
