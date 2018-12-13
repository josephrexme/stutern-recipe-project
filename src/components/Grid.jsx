import styled, { css } from 'styled-components';

export const Grid = styled.div`
  padding: 10px;
  @media(min-width: 645px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Column = styled.div`
  padding: 10px;
  ${ props => props.columns === '3' && css`
    @media (min-width: 645px) {
      flex: 0 0 33.3%;
      max-width: 33.3%;
    }
  ` }
  ${ props => props.columns === '2' && css`
    @media (min-width: 645px) {
      flex: 0 0 50%;
      max-width: 50%;
    }
  ` }
`;
