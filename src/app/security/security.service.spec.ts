import { TestBed } from '@angular/core/testing';

import { SecurityService } from './security.service';

describe('SecurityService', () => {
  let service: SecurityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecurityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the list of all the roles available', async () => {
    // execute
    const getAllRoles = await service.getAllRoles();

    // assert
    getAllRoles.subscribe((roles) => {
      expect(roles).toContainEqual(['Admin', 'Manager', 'User']);
    })
  });
});