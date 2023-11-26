import styled from "styled-components";

export interface IStarRatingStyles {
  starContainer?: any,
  star?: any
}

export const StarRatingContainer = styled.div<{$styles: any}>`
  display: inline-flex;
  ${(props) => {
    return {
      ...props.$styles
    }
  }}
`

export const Star = styled.div<{$active: boolean, $styles: any}>`
  display: block;
  cursor: pointer;

  ${(props) => {
    if (props.$active)
      return `
        color: red;
        font-weight: bold;
      `;
  }}

  ${(props) => {
    return {
      ...props.$styles
    }
  }}
`