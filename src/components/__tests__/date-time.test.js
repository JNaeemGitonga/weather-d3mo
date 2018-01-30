'use strict';

import React, {Component} from 'react';
import DateTime from '../date-time.react';
import renderer from 'reac-test-renderer';

it('renders correctly', () => {
    const tree = renderer
      .create(<DateTime />)
    expect(tree).toMatchSnapshot();
  });