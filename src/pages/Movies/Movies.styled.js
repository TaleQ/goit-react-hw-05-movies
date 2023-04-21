import styled from "styled-components";

export const SearchForm = styled.form`
display: flex;
justify-content: center;
margin-top: 20px;
margin-bottom: 20px;
`;

export const SearchInput = styled.input`
width: 280px;
height: 34px;
caret-color:  #003399;
`;

export const SearchButon = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #141e58;
  border: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  &:hover{
    opacity: 1;
  }
`
