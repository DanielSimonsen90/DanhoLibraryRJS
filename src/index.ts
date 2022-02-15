export * from './hooks';
export * from './utils';
export * from './components';

import scss from 'node-sass';
scss.renderSync({ file: 'styles' })