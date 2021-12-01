import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sem-accounts-landing',
  templateUrl: './accounts-landing.component.html',
  styleUrls: ['./accounts-landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountsLandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
