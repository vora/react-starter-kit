// This helper is a custom implementation of
// React Test Renderer that provides
// Components a memory router as well as
// Any additional providers that you specify.

import { ReactElement } from 'react';
import { MemoryRouter } from 'react-router-dom';
import TestRenderer, {
  ReactTestRenderer,
  TestRendererOptions,
} from 'react-test-renderer';

function testRenderer(
  nextElement: ReactElement,
  options?: TestRendererOptions,
): ReactTestRenderer {
  return TestRenderer.create(
    <MemoryRouter>{nextElement}</MemoryRouter>,
    options,
  );
}

export default testRenderer;
