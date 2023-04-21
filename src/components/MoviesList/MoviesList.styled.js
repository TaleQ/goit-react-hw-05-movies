import styled from "styled-components";

export const MoviesList = styled.ul`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 10px;
row-gap: 25px;
`;

export const MoviesListItem = styled.li`
flex-basis: calc((100% - 40px)/5);
text-align: center;
font-size: 22px;
padding-bottom: 5px;
transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover{
    transform: scale(1.03);
    cursor: pointer;
  }
  img {
  margin-bottom: 5px;
  object-fit: cover;
  border-radius: 6px;
  overflow: hidden;
}
`