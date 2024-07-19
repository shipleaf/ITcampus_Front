import React, { useState } from 'react';
import styled from 'styled-components';

const SignInHeader = styled.div`
    margin-bottom: 15%;
`

const LoginForm = styled.form`
    font-size: 15px;
    padding-top: 80px;
    padding-bottom: 100px;
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #00ACEE;
    border-radius: 10px;
`;

const Input = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid #000;
    margin-bottom: 20%;
    padding-bottom: 15px;

    &:focus{
        outline: none;
    }
`;

const InputDiv = styled.div`
    width: 100%;
`;

const SignInButton = styled.button`
    width: 60%;
    height: 50px;
    color: #fff;
    background-color: #00ACEE;
    border: none;
    border-radius: 10px;
    cursor: pointer;
`

const SignUpButton = styled.button`
    width: 60%;
    height: 50px;
    color: #00ACEE;
    background-color: #fff;
    border: 1px solid #00ACEE;
    border-radius: 10px;
    cursor: pointer;
`

const HRComponent = styled.div`
font-size: 12px;
width: 60%;
    display: flex;
    margin: 15px auto;
    justify-content: space-between;
    & hr{
        width: 150px;
        height: 0;
    }
    & hr.left{
        margin-right: 30px;
    }
    & hr.right{
        margin-left: 30px;
    }
`


function SignInComponent({ setIsLoggedIn }) {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        const userData = {
            id,
            password
        };

        console.log(userData)

        try {
            const response = await fetch('http://localhost:8080/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
                credentials: 'include' // 쿠키를 포함하도록 설정
            });

            if (!response.ok) {
                throw new Error('로그인에 실패했습니다!');
            }

            const result = await response.json();
            console.log('로그인 성공:', result);
            setIsLoggedIn(true);
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div>
            <LoginForm onSubmit={handleLogin}>
                <SignInHeader>로그인</SignInHeader>
                <div id="logincomp" style={{width: '60%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <InputDiv className="loginId">
                        <Input
                            type="text"
                            maxLength="10"
                            id="username"
                            value={id}
                            autoComplete="new-password"
                            onChange={(event) => setId(event.target.value)}
                            placeholder='로그인'
                        />
                    </InputDiv>
                </div>
                <div id="passwordcomp" style={{width: '60%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <InputDiv className="loginPassword">
                        <Input
                            type="password"
                            id="password"
                            value={password}
                            autoComplete="new-password"
                            onChange={(event) => setPassword(event.target.value)}
                            placeholder='회원가입'
                        />
                    </InputDiv>
                </div>
                <SignInButton type="submit">로그인</SignInButton>
                <HRComponent>
                    <hr className='left'/>
                    <div>또는</div>
                    <hr className='right'/>
                </HRComponent>
                <SignUpButton>회원가입</SignUpButton>
            </LoginForm>
        </div>
    );
}

export default SignInComponent;