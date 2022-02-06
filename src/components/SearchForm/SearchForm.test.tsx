import {
    render,
    screen,
  } from '@testing-library/react';
import { mockInitialState } from '../../__mock__/mock_data';
import { SearchForm } from './SearchForm';

  test('checking `From & To` text is present or not', () => {
    render(
        <SearchForm {...mockInitialState} />
    );
    expect(
        screen.getByText(/From/i)
      ).toBeInstanceOf(Node);
      expect(
        screen.getByText(/To/i)
      ).toBeInstanceOf(Node);
  });
  test('checking `To` text is present or not', () => {
    render(
        <SearchForm {...mockInitialState} />
    );

      expect(
        screen.getByText(/To/i)
      ).toBeInstanceOf(Node);
  });
  test('checking `Search` text is present or not', () => {
    render(
        <SearchForm {...mockInitialState} />
    );
   
      expect(
        screen.getByText(/Search/i)
      ).toBeInstanceOf(Node);
  });
  