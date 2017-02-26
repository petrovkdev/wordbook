import React from 'react';

const initialState = (
    <ul>
      <li>1</li>
      <li>2</li>
    </ul>
  );

export default function form1(state = initialState, action) {
  if (action.type === 'form1') {
    return [
        ...state,
        action.payload
    ]
  }
  return state;
}
