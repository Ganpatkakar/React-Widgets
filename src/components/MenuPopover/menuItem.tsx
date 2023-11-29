import React from 'react';

interface IMenuItem {
  children: any;
}

export function MenuItem(props: IMenuItem) {
  return (
    <div>{props.children}</div>
  )
}
