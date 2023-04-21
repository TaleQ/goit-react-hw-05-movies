import styled from 'styled-components';

export const CastList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 15px;
  row-gap: 15px;
`;

export const CastItem = styled.li`
  flex-basis: 200px;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
`;

export const DefaultCastImg = styled.img`
  max-width: 200px;
  height: 300px;
  object-fit: cover;
`;
