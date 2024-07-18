import React from 'react';
import styled from 'styled-components';
import star from '../../assets/scrap.png'

function Post(title, detail, writer , img, scrap,startDate, endDate){
    return (
        <ButtonFrame>
          <ContentContainer >
            <Title>
                [공지] 12기 중앙 해커톤 안내
            </Title>
            <Content>이러쿵저러쿵vdsssssssssss
                sssssssssssssssssssssssssssssss이러쿵저러쿵vdssssssssssssssssssssssssssssssssssssssssss이러쿵저러쿵vdssssssssssssssssssssssssssssssssssssssssss이러쿵저러쿵vdssssssssssssssssssssssssssssssssssssssssss이러쿵저러쿵vdssssssssssssssssssssssssssssssssssssssssss</Content>
            <Footer>
                <Writer>
                    멋쟁이사자처럼 대학
                </Writer>
                <Date>
                    2024. 7.5 ~ 2024. 7. 14
                </Date>
                <ScrapContainer>
                    <ScrapImg src = {star} />
                    <ScrapCount>215</ScrapCount>
                </ScrapContainer>
            </Footer>
          </ContentContainer>
          <ThumbnailContainer>
            <Thumbnail src = {star}/>
          </ThumbnailContainer>
        </ButtonFrame>
    );
}
export default Post;

const ButtonFrame = styled.button`
    display: flex;
    width: 60%;
    height: 12%;
    margin: 15px auto;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    border : none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
    border: 3px solid #36bef1;
    transform: scale(1.05);
  }
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 70%;
    height: 100%;
    margin: 5px;
    overflow: hidden;
`
const Title = styled.div`
    font-size: 25px;
    font-weight: bold;
    margin: 3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`
const Content = styled.div`
  font-size: 18px;
  color: #666;
  text-align: left;
  margin: 10px 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Footer = styled.div`
    display : flex;
    align-items: center;
    margin : 15px 0px;
    height: 10%;
`
const Writer = styled.div`
    font-size: 16px;
    font-weight: bold;
    width: 200px;
    color: black;
`

const Date = styled.div`
    font-size: 14px;
    color: #999;
    margin : auto 10px;
`

const ScrapContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 30px;
`

const ScrapImg = styled.img`
    width: 25px;
    height: 25px;
`

const ScrapCount = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: #999;
    margin-left : 7px;
    margin-top : 2.4px;
`

const ThumbnailContainer = styled.div`
    flex-shrink: 1;
    margin-right: 20px;
`
const Thumbnail = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
`