import styled from 'styled-components';

export const Grid = styled.div`
  display: inline-grid;
  grid-template-columns: 30.33% 30.33% 30.33%;
  grid-template-rows: 30%;
  @media(max-width: 800px) {
    grid-template-columns: 50% 50%;
    grid-template-rows: 100%;
  }
  @media(max-width: 500px) {
    grid-template-columns: 100%;
    grid-template-rows: 100%;
  }
`;

export const Column = styled.div`
  padding: 10px;
  
`;
