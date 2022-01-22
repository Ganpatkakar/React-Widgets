import React, { useState } from "react";

export default function index({ onClick: handleClick, value, initialState }) {
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
