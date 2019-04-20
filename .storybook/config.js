import { configure, addDecorator } from '@storybook/react';
import { withConsole } from '@storybook/addon-console'
import React from "react";

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.tsx$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

addDecorator((story, context) => withConsole()(story)(context));

configure(loadStories, module);
