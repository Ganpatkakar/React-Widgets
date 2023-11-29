import React, { useContext } from 'react';
import { MenuContext } from './context/menu.context';
import styled from 'styled-components';

interface IMenuPopover {
  children: any;
}

const MenuPopoverContainer = styled.div<{ $display: boolean }>`
  display: ${(props) => props.$display ? "block" : "none"};
  height: 0px;
  left: 0px;
  position: absolute;
  right: 0px;
  top: 0px;
  width: 100%;
  z-index: 1000000;
`

const ModelPopeverContent = styled.div<{ $position: any }>`
  position: absolute;
  left: 0px;
  top: 0px;
  margin: 0px;
  transform: ${(props) => `translate3d(${props.$position.left}px, ${props.$position.bottom}px, 0px);`}
  z-index: 1000000;
  right: 0px;

  color: rgb(36, 36, 36);
  background-color: rgb(255, 255, 255);
  border: 1px solid rgba(0, 0, 0, 0);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 2px 0px, rgba(0, 0, 0, 0.14) 0px 8px 16px 0px;

  border-radius: 4px;
  transform: ${(props) => `matrix(1, 0, 0, 1, ${props.$position.left}, ${props.$position.bottom})`};
  box-sizing border-box
  display: block;

  max-width: 300px;
  min-width: 138px;
  overflow-x: hidden;
  padding: 4px;
`


export function MenuPopover(props: IMenuPopover) {
  const { open = false, currentRef } = useContext(MenuContext);
  
  if (!open) {
    return null;
  }

  const position = currentRef?.current?.getBoundingClientRect()  || {};

  return (
    <MenuPopoverContainer $display={open}>
      <ModelPopeverContent $position={position}>
        {props.children}
      </ModelPopeverContent>
    </MenuPopoverContainer>
  )
}
