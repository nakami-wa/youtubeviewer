import React from 'react';
import { actions } from '@storybook/addon-actions';
import Input from '.';

export default { title: 'atoms/Input' };

const props = {
  placeholder: '入力してください',
  ...actions('onChange'),
};

export const input = () => <Input {...props} />;

export const defaultValue = () => <Input {...props} defaultValue="北欧、暮らしの道具店" />;
defaultValue.story = {
  name: 'デフォルト値',
};
