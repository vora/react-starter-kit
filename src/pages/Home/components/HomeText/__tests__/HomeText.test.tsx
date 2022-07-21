import { HomeText } from '..';

import testRenderer from '~/lib/testHelpers/testRenderer';

describe('HomeText', () => {
  test('it renders and matches snapshot', () => {
    const wrapper = testRenderer(<HomeText welcomeText="Welcome Home!" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
