import React from 'react';
import styled from 'styled-components';
import SearchIcon from '../../assets/searchicon.png'

function Top(title, search){
    return (
        <Frame>
          <TitleContainer>
            <Title>기모띠</Title>
          </TitleContainer>
          <SearchContainer>
            <SearchImage src={SearchIcon} />
            <Search placeholder='검색' />
          </SearchContainer>
        </Frame>
    );
}
export default Top;

const Frame = styled.div`
  display : flex;
  align-items: flex-end;
  width: 60%;
  margin : 10px auto;
  margin-top : 40px;
  justify-content: space-between;
`

const TitleContainer = styled.div`
  width : 60%;
  flex-direction : column;
  border-bottom: 1px solid #000;
`

const Title = styled.div`
  width : 100%;
  padding : 10px 0;
  font-size: 40px;
  margin-bottom : 30px;
  font-weight: bold;
`

const SearchContainer = styled.div`
  display: flex;
  flex: 1;
  width: 40%;
  justify-content: center;
  margin-left : 10px;
  position: relative;
`
const Search = styled.input`
  width: 100%;
  height: 30px;
  padding: 0 10px 0 40px; 
  border: 1px solid #7a7a7a;
  box-shadow: 0px 0px 1px #777777, -1px 1px 3px #777777;
  border-radius: 10px;
  outline: none;
`;

const SearchImage = styled.img`
  position: absolute;
  left: 10px; 
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
`;