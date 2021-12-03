import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { Account } from '@portfolio/models';

@Component({
  selector: 'sem-account-goal',
  templateUrl: './account-goal.component.html',
  styleUrls: ['./account-goal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountGoalComponent implements OnChanges {
  @Input()
  public account!: Account;

  @Input()
  public current = 0;

  public percentage = 0;
  public dashArray = '';

  public ngOnChanges() {
    if (this.account && this.current) {
      this.percentage = (this.current * 100) / this.account.goal;
      this.dashArray = `${this.percentage}, 100`;
    }
  }
}
