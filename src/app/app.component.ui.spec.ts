import {getNodeText, render, screen} from '@testing-library/angular';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  it('should render Angular Material', async () => {
    await render(AppComponent, {
      imports: [MaterialModule],
    })

    const element = await screen.getByTestId('title');
    const content = getNodeText(element);
    expect(content).toContain('Angular Material');
  });
});
