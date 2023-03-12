import {waitForAsync} from "@angular/core/testing";

import {fireEvent, getNodeText, render, screen, waitFor} from '@testing-library/angular';

import {MaterialModule} from './material.module';
import {SecurityService} from './security/security.service';

import {Observable} from "rxjs/internal/Observable";
import {of} from "rxjs";

import {AppComponent} from './app.component';

// mock security service
const securityServiceFactory = (mock: () => Observable<string[]>) => {
  const securityService = new SecurityService();
  jest.spyOn(securityService, 'getAllRoles').mockImplementation(mock);
  return securityService;
}
describe('AppComponent', () => {

  beforeEach(waitForAsync(() => {
  }));

  it('should render title Angular Material', async () => {
    // params
    const expectedTitle = 'Angular Material';

    // render
    await render(AppComponent, {
      imports: [MaterialModule]
    });

    // execute
    const element = await screen.getByRole('title');
    const content = getNodeText(element);

    // assert
    expect(content).toContain(expectedTitle);
  });

  it('should render the list of all the roles available', async () => {
    // params
    const expectedRoles = ['Admin', 'User'];
    // mock
    const getAllRoleMocked = jest.fn(() => of(expectedRoles));
    // render
    await render(AppComponent, {
      providers: [
        { provide: SecurityService,
          useValue: securityServiceFactory(getAllRoleMocked)
        }
      ],
      imports: [MaterialModule]
    });

    // execute
    const selectRoles = await screen.getByRole('display-roles');
    fireEvent.click(selectRoles);
    const roleContainer = await screen.getByRole('listbox');
    await waitFor(() => expect(roleContainer.childElementCount).toBe(2));

    // assert
    expect(extractRoles(roleContainer)).toStrictEqual(expectedRoles);

    // verify
    expect(getAllRoleMocked).toBeCalled();
  });
});

function extractRoles(select: HTMLElement): string[] {
  const roles = [];
  for (let i = 0; i < select.childElementCount; i++) {
    const element = select.children.item(i);
    if (element != null && element.textContent != null) {
      roles[i] = element.textContent.trim();
    }
  }
  return roles;
}
