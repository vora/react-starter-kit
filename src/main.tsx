/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createRoot } from 'react-dom/client';

import { App } from './components/App';

// We have to use the "!" here since there is no way
// For the code here to be aware of an element called
// "root". The "!" tells typescript that we "know better"
const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(<App />);
