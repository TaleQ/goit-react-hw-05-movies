import styled from 'styled-components';

export const MoviesList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 10px;
  row-gap: 25px;
`;

export const MoviesListItem = styled.li`
  flex-basis: 290px;
  text-align: center;
  font-size: 22px;
  padding-bottom: 5px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 20px) / 3);
  }
  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 40px) / 5);
  }

  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
  img {
    height: 600px;
    margin-bottom: 5px;
    object-fit: cover;
    border-radius: 6px;
    overflow: hidden;
  }
`;
