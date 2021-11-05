import { render, screen } from '@testing-library/react';
import { ReactDOM } from 'react-dom';
import JsReactApp from './App';

test('renders learn react link', () => {
  const div = document.createElement('div')
  ReactDOM.render(<JsReactApp />,div);
  ReactDOM.unmountComponentAtNode(div)
});
