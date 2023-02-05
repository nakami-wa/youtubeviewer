import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { addDecorator } from '@storybook/react';
import GlobalStyle from '../src/style/GlobalStyle';
import { action } from '@storybook/addon-actions';
import { FavoriteProvider } from '../src/contexts/FavoriteContext';

addDecorator(storyFn => (
  <MemoryRouter
    initialEntries={['/', 'posts']}
  >
    {storyFn()}
  </MemoryRouter>
));

const mockApi = {
  get: async () => {
    // モック実装
    action('api.get')();
    return { data: [] };
  },
};

addDecorator((storyFn) => (
  <FavoriteProvider api={mockApi}>
    {storyFn()}
  </FavoriteProvider>
));

addDecorator(storyFn => <><GlobalStyle />{storyFn()}</>); 

