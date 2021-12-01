import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sem-account-invitations',
  templateUrl: './account-invitations.component.html',
  styleUrls: ['./account-invitations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountInvitationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
