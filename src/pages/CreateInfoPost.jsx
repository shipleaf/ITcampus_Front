import React, { useState } from 'react';
import { IoImageOutline } from "react-icons/io5";
import styled from 'styled-components';
import UserHeader from '../components/modules/header/UserHeader';
import { loginState } from '../state/atoms';
import GuestHeader from '../components/modules/header/GuestHeader';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';

function CreateInfoPost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [imageBase64, setImageBase64] = useState('');
  const [imageBase642, setImageBase642] = useState('');
  const [fileName1, setFileName1] = useState('');
  const [fileName2, setFileName2] = useState('');
  const isLoggedIn = useRecoilValue(loginState);

  const navigate = useNavigate();

  const handlePost = () => {
    navigate('/informationlist');
  }

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log('Image 1 selected:', file);
    setFileName1(file.name);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImageBase64(reader.result);
      console.log('Image 1 Base64:', reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleImageChange2 = (event) => {
    const file = event.target.files[0];
    console.log('Image 2 selected:', file);
    setFileName2(file.name);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImageBase642(reader.result);
      console.log('Image 2 Base64:', reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleCancel = () => {
    window.location.href = '/informationlist';
    console.log('Canceled');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log('Title:', title);
    console.log('Body:', body);
    console.log('Image:', imageBase64);
    console.log('Image2:', imageBase642);

    const postData = {
      title: title,
      body: body,
      pic1: imageBase64,
      pic2: imageBase642,
    };

    try {
      const response = await fetch('https://mjcback.duckdns.org/api/freeboard/create', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          credentials: true,
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        if (response.status >= 400 && response.status < 500) {
          const errorData = await response.json();
          alert(`클라이언트 에러: ${errorData.message || '알 수 없는 에러가 발생했습니다.'}`);
          throw new Error(`Client error: ${errorData.message || 'Unknown error'}`);
        } else if (response.status >= 500) {
          alert('서버 에러가 발생했습니다. 잠시 후 다시 시도해 주세요.');
          throw new Error('Server error');
        } else {
          alert('글 작성 실패.');
          throw new Error('글 작성 실패.');
        }
      }
      const result = await response.json();
      console.log('글 작성 성공:', result);
      alert('글 작성이 성공적으로 완료되었습니다.');
      handlePost();
    } catch (error) {
      console.error('에러 발생:', error);
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <UserHeader />
      ) : (
        <GuestHeader />
      )
      }
      <Frame onSubmit={handleSubmit}>
        <IntroContainer>
          <Intro> 게시글 작성</Intro>
        </IntroContainer>
        <PostCreateFrame>
          <TitleContainer>
            <TitleInput
              type="text"
              placeholder="제목을 입력해 주세요."
              value={title}
              onChange={handleTitleChange}
            />
          </TitleContainer>
          <Textarea
            placeholder="내용을 입력하세요."
            value={body}
            onChange={handleBodyChange}
          />
          <StyledImgContainer>
            <Label htmlFor="imageUpload1">
              <StyledIoImageOutline />
              <span>{fileName1 || '이미지 선택'}</span>
            </Label>
            <HiddenFileInput
              id="imageUpload1"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </StyledImgContainer>
          <StyledImgContainer>
            <Label htmlFor="imageUpload2">
              <StyledIoImageOutline />
              <span>{fileName2 || '이미지 선택'}</span>
            </Label>
            <HiddenFileInput
              id="imageUpload2"
              type="file"
              accept="image/*"
              onChange={handleImageChange2}
            />
          </StyledImgContainer>
          <ButtonContainer>
            <CancelButton type="button" onClick={handleCancel}>취소</CancelButton>
            <SaveButton type="submit">저장</SaveButton>
          </ButtonContainer>
        </PostCreateFrame>
      </Frame>
    </>
  );
};

export default CreateInfoPost;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width : 40%;
  height: 100px;
`

const Intro = styled.div`
  width: 100%;
  margin-left: 10px;
  font-size: 30px;
  font-family: "Noto Sans KR", sans-serif;
`

const PostCreateFrame = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 40%;
  margin: 10px auto;
`

const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  width: 100%;
`

const StyledImgContainer = styled.label`
  display : flex;
  flex-direction: row;
  align-items: center;

`

const StyledIoImageOutline = styled(IoImageOutline)`
  font-size: 30px;
  color: #ccc; 
`
const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  & span{
    font-family: "Noto Sans KR", sans-serif;
  }
  &:hover{
    cursor: pointer;
    background-color: #f0f0f0;
  }
`

const HiddenFileInput = styled.input`
  display: none;
`

const TitleInput = styled.input`
  width: 100%;
  flex: 1;
  padding: 10px;
  padding-top: 15px;
  font-size: 25px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background-color: white;
  margin-right: 10px;
`

const Textarea = styled.textarea`
  align-self: center;
  width: 100%;
  height: 400px;
  box-sizing: border-box;
  font-size: 18px;
  border-radius: 4px;
  border: 1px solid #ccc;
  resize: none;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 20px;
`

const CancelButton = styled.button`
  margin-right: 30px;
  background-color: white;
  color: #000;
  font-weight: bold;
  font-size: 20px;
  height: 40px;
  width: 80px;
  border: 1px solid #999;
  border-radius: 10px;
  cursor: pointer;
`

const SaveButton = styled.button`
  background-color: #79BFFF;
  font-weight: bold;
  font-size: 20px;
  height: 40px;
  width: 80px;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`
