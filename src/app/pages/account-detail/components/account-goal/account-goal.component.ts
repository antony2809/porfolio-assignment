import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sem-account-goal',
  templateUrl: './account-goal.component.html',
  styleUrls: ['./account-goal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountGoalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
