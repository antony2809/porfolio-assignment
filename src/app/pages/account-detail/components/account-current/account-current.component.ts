import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { Account } from '@portfolio/models';

@Component({
  selector: 'sem-account-current',
  templateUrl: './account-current.component.html',
  styleUrls: ['./account-current.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountCurrentComponent {
  @Input()
  public account: Account;

  @Input()
  public initial = 0;

  @Input()
  public current = 0;

  @Input()
  public total = 0;
}
