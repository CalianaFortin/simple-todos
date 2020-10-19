import React from 'react';

export const Task = ({ task }) => {
  return <li>{task.text}</li>
};

// As this component will be inside a list you are returning a li element.