import { mockInitialDataHotelCard } from '../../__mock__/mock_data';
import renderer from 'react-test-renderer';
import HotelCard from './HotelCard';
import {
    render,
    screen,
  } from '@testing-library/react';

  test('render correctly HotelCard Comeponet', () => {
    const searchComponent = renderer
      .create(
        <HotelCard {...mockInitialDataHotelCard} />
      )
      .toJSON();
    expect(
      searchComponent
    ).toMatchSnapshot();
  });
test('Cecking `Total Nights` text is present or not', () => {
    render(
      <HotelCard {...mockInitialDataHotelCard} />
    );
    expect(
      screen.getByText(/Total Nights/i)
    ).toBeInstanceOf(Node);
  });
  test('Cecking `Search by Price` text is present or not', () => {
    render(
        <HotelCard {...mockInitialDataHotelCard} />
    );
    expect(
      screen.getByText(/Sort by Price/i)
    ).toBeInstanceOf(Node);
  });
  
  test('Cecking `Search by Name` text is present or not', () => {
    render(
        <HotelCard {...mockInitialDataHotelCard} />
    );
    expect(
      screen.getByText(/Sort by Name/i)
    ).toBeInstanceOf(Node);
  });