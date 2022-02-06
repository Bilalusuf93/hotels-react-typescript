import { mockInitialDataCardDetails } from '../../__mock__/mock_data';
import renderer from 'react-test-renderer';
import {
    render,
    screen,
} from '@testing-library/react';
import { CardDetails } from './CardDetails';



test('Cecking `Name` text is present or not', () => {
    render(
        <CardDetails {...mockInitialDataCardDetails} />
    );
    expect(
        screen.getByText(/Name/i)
    ).toBeInstanceOf(Node);
});

test('Cecking `Price` text is present or not', () => {
    render(
        <CardDetails {...mockInitialDataCardDetails} />
    );
    expect(
        screen.getByText(/Price/i)
    ).toBeInstanceOf(Node);
});

test('Cecking `City` text is present or not', () => {
    render(
        <CardDetails {...mockInitialDataCardDetails} />
    );
    expect(
        screen.getByText(/City/i)
    ).toBeInstanceOf(Node);
});

test('render correctly CardDetails Comeponet', () => {
    const searchComponent = renderer
      .create(
        <CardDetails {...mockInitialDataCardDetails} />
      )
      .toJSON();
    expect(
      searchComponent
    ).toMatchSnapshot();
  });
