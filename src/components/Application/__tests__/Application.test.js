import React from 'react';
import { shallow } from 'enzyme';
import { Application } from 'components/Application';
import { PageNotFound } from 'pages';

describe('Application Component', () => {
  test('Render component', () => {
    const route = {
      routes: [
        { path: '/', exact: true, component: PageNotFound },
      ],
    };
    const wrapper = shallow(<Application route={route} />);
    expect(wrapper.exists()).toBe(true);
  });
});
