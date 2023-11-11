import * as React from 'react'

interface IProps {
  onClick: (...args: any[]) => {},
  value: string | undefined
  initialState: boolean
}

export default function index(props: IProps) {
  const { onClick: handleClick, value, initialState } = props;
  return (
    <>
      <input
        type="checkbox"
        id={value}
        onChange={() => {
          handleClick(value, !initialState);
        }}
        checked={initialState}
      />
      <label htmlFor={value}>Toggle</label>
    </>
  );
}
