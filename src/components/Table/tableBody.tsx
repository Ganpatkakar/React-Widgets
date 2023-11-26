import React from "react";
import styled from "styled-components";

const TableBodyContainer = styled.div`
  display: block;
  max-height: 490px;
  overflow: scroll;
  max-wdith: 100%;
  box-size: border-box;
`

export function TableBody(props: any) {

  return (
    <TableBodyContainer>
      {props.children}
    </TableBodyContainer>
  )
}