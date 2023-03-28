/**
 * @jest-environment jsdom
 */

import * as ReactDOMClient from 'react-dom/client';
import { act } from '@testing-library/react';
import React, { createRef } from 'react';
import { FieldInput } from '../components/form/FieldInput';

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
      const handleChangeInput = () => console.log('Input was changing');
      const inputStreetRef: React.RefObject<HTMLInputElement> = createRef<HTMLInputElement>();
      root.render(
        <FieldInput
            type="text"
            id="street"
            ref={inputStreetRef}
            label="Street:"
            classNames={['input', 'input_text']}
            onChange={handleChangeInput}
      />
      );
    });
    if (!container) {
      return;
    }
    expect(container.textContent).toContain('Street:');
  });
});
