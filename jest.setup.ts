// eslint-disable-next-line import/no-extraneous-dependencies
import { setGlobalConfig } from '@storybook/testing-react';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom';
// Storybook's preview file location
import * as globalStorybookConfig from './.storybook/preview';

setGlobalConfig(globalStorybookConfig);
