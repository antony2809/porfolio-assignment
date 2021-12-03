import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { Account } from '@portfolio/models';

@Component({
  selector: 'sem-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountListComponent {
  @HostBinding('class.empty')
  public get empty() {
    return this.accounts?.length === 0 ?? false;
  }

  @Input()
  public accounts!: Account[];

  @Input()
  public loading!: boolean;

  @Output()
  public readonly create = new EventEmitter<void>();

  public readonly skeletons = [...Array(3).keys()];
}
