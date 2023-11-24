import React from "react";

interface IToggleInput {
  onClick: (...args: any[]) => void;
  value: string;
  initialState: boolean;
}

export default function ToggleInput({
  onClick: handleClick,
  value,
  initialState,
}: IToggleInput) {
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
