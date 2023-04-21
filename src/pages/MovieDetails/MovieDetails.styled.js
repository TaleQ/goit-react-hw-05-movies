import styled from "styled-components";

export const GoBackButton = styled.button`
margin-bottom: 10px;
padding: 5px 10px;
background-color: #141e58;
color: #fff;
border-radius: 4px;
border-style: none;
opacity: 0.6;
&:hover{
    opacity: 1;
  }
`;
export const MovieCard = styled.div`
padding: 10px;
padding-bottom: 20px;
display: flex;
gap: 15px;
text-align: justify;
border-bottom: 1px solid #141e58;
h1 {
  text-align: left;
}
`;

export const GenresList = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 10px;
`;

export const GenresItem = styled.li`
padding: 10px;
background-color: #141e58;
color: #fff;
border-radius: 4px;
border: 1px solid;
opacity: 0.6;
`;

export const StyledSpan = styled.span`
margin-left: 5px;
`;

export const MovieThumb = styled.div`
padding: 10px;
padding-bottom: 20px;
border-bottom: 1px solid #141e58;
`;

export const AddInfoLink = styled.li`
margin-bottom: 5px;
`;

