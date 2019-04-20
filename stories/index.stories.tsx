import * as React from 'react';
import '@storybook/addon-actions/register'
import { action } from '@storybook/addon-actions'

import { storiesOf } from '@storybook/react';

storiesOf('About', module).add('default', () => <div onClick={ action('click') }>Hello</div>);
