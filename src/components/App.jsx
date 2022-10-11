import React from 'react';
import Counter from './Counter/Counter';

export const App = () => {
  return (
    <>
      <h1>Стан компонента</h1>
      <Counter initialValue={10} />
    </>
  );
};
// ==================================

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAf50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D88' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];
