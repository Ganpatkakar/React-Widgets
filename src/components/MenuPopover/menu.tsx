import React, { useEffect, useRef } from 'react';
import { IMenu } from './@types.menu';
import { MenuProvider } from './context/menu.context';
import styled from 'styled-components';

type DefaultProps = Partial<IMenu>;

const defaultProps: DefaultProps = {
  open: false
}

const MenuContainer = styled.div`
  display: block;
`

export function Menu(props: IMenu) {
  const { open } = props;
  const currentRef = useRef(null);

  return (
    <MenuContainer ref={currentRef}>
      <MenuProvider open={open} currentRef={currentRef}>
        {props.children}
      </MenuProvider>
    </MenuContainer>
  )
}

Menu.defaultProps = defaultProps;
