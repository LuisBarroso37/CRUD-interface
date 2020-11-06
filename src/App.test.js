import { shallow } from 'enzyme';

import App from './App';

describe('App component testing', () => {
  it('expect to render App component', () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
});
