import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 10px;
    justify-items: center;
  @media(min-width: 645px) {
    grid-template-rows: auto;
  }
`;

export const Column = styled.div`
  @media (min-width: 645px) {
   
    max-width: 100%;
  }
`;
