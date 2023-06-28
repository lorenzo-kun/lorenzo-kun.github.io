import 'react-app-polyfill/ie11';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
// Insert import for the component to test here (defaults to importing from dist/index)
import { Thing } from '../.';

const App = () => {
  return (
    <div>
      {/* Insert the component to test here */}
      <Thing />
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
