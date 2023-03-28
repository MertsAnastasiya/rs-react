/**
 * @jest-environment jsdom
 */

import * as ReactDOMClient from 'react-dom/client';
import { act } from '@testing-library/react';
import React, { createRef } from 'react';
import { FieldCheckbox } from '../components/form/FieldCheckbox';

let container: Element | null = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

describe('FieldCheckbox component', () => {
  it('renders FieldCheckbox component', () => {
    act(() => {
      if (!container) {
        return;
      }
      const root = ReactDOMClient.createRoot(container);
      const handleChangeInput = () => console.log('Input was changing');
      const checkboxBalconyRef: React.RefObject<HTMLInputElement> = createRef<HTMLInputElement>();
      root.render(
        <FieldCheckbox
          ref={checkboxBalconyRef}
          classNames={['label']}
          label="garage"
          onChange={handleChangeInput}
        />
      );
    });
    if (!container) {
      return;
    }
    expect(container.textContent).toContain('garage');
  });
});
