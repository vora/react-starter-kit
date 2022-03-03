import { HomeText } from '..';

import testRenderer from '~/lib/testHelpers/testRenderer';

describe('HomeText', () => {
  test('it renders and matches snapshot', () => {
    const wrapper = testRenderer(<HomeText />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
