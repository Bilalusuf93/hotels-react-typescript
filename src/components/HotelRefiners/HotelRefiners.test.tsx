
import { mockInitialDataRefiners } from '../../__mock__/mock_data';
import { HotelRefiners } from './HotelRefiners';
import renderer from 'react-test-renderer';
test('check if it is redering', () => {
    let searchComponent = renderer.create(
        <HotelRefiners {...mockInitialDataRefiners} />
    ).toJSON();
    expect(
        searchComponent
      ).toMatchSnapshot();
});