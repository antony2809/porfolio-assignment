import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sem-account-current',
  templateUrl: './account-current.component.html',
  styleUrls: ['./account-current.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountCurrentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
