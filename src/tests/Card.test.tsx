/**
 * @jest-environment jsdom
 */

import * as ReactDOMClient from 'react-dom/client';
import { act } from '@testing-library/react';
import { Card } from '../components/cards/Card';

let container: Element | null = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

describe('Card component', () => {
  it('renders App component', () => {
    act(() => {
      if (!container) {
        return;
      }
      const root = ReactDOMClient.createRoot(container);

      root.render(
        <Card
          key={1}
          classes={['input']}
          street={'Amsterdamse Veerkade 1'}
          price={1455}
          city={'The Hague'}
          thumbnail={'thumbnail'}
          living={78}
          rooms={3}
        />
      );
    });
    if (!container) {
      return;
    }
    expect(container.textContent).toContain('Amsterdamse Veerkade 1');
  });
});
