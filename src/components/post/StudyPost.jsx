import React from 'react';
import styled from 'styled-components';
import commentImg from '../../assets/commentImg.png';

function StudyPost({ title, detail, writer, img, datecreate, commentNum, width }) {
    return (
        <>
            <ButtonFrame width = {width}>
                <ContentContainer>
                    <Title>{title}</Title>
                    <Content>{detail}</Content>
                    <Footer>
                        <Writer>{writer}</Writer>
                        <Date>{datecreate}</Date>
                        <CommentContainer>
                            <CommentImg src={commentImg} />
                            <CommentCount>{commentNum}</CommentCount>
                        </CommentContainer>
                    </Footer>
                </ContentContainer>
                {img && (
                    <ThumbnailContainer>
                        <Thumbnail src={img} />
                    </ThumbnailContainer>
                )}
            </ButtonFrame>
            <Divider width = {width}/>
        </>
    );
}

export default StudyPost;

const ButtonFrame = styled.button`
    display: flex;
    width: ${(props) => props.width || '60%'};
    height: 150px;
    margin: 20px auto 15px auto;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    border: 3px solid white;
    margin-bottom: 1px solid black;

    &:hover {
        border: 3px solid #36bef1;
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
    font-size: 20px;
    font-weight: bold;
    margin: 3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Content = styled.div`
    font-size: 16px;
    color: #666;
    text-align: left;
    margin: 10px 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Footer = styled.div`
    display: flex;
    width: 100%;
    height: 10%;
    align-items: center;
    margin-top: auto; 
    margin: 15px 0px 0px 0px;
`

const Writer = styled.div`
    font-size: 16px;
    font-weight: bold;
    width: 150px;
    color: black;
`

const Date = styled.div`
    font-size: 14px;
    color: #999;
    margin: auto 10px;
`
const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 30px;
`

const CommentImg = styled.img`
    width: 25px;
    height: 25px;
`

const CommentCount = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: #999;
    margin-left: 7px;
    margin-top: 2.4px;
`

const ThumbnailContainer = styled.div`
    flex-shrink: 1;
    margin-right: 20px;
    border: none;
`

const Thumbnail = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border: none;
`

const Divider = styled.div`
    margin: 5px auto;  
    width: 50%;
    height: 1px;
    background-color: #ccc;
    display: ${(props) => (props.width === '100%' ? 'none' : 'block')};
`