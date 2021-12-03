import { AccountDetailLandingStore } from './account-detail-landing.store';
import { of } from 'rxjs';

const mockRoute = {
  params: of({ id: 1 }),
} as any;

const mockFirestore = {} as any;

describe('AccountDetailLandingStore', () => {
  let store = new AccountDetailLandingStore(mockRoute, mockFirestore);

  it('should create', () => {
    expect(store).toBeTruthy();
  });
});
