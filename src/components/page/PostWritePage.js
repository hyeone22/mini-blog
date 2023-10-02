import Button from 'components/ui/Button';
import TextInput from 'components/ui/TextInput';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    & > * {
        :not(:last-child) {
          margin-bottom: 16px;
        }
    }
`;

function PostWritePage(props) {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
      <Wrapper>
        <Container>
          <TextInput
            height={28}
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <TextInput
            height={480}
            content={content}
            onChange={(event) => {
              setContent(event.target.value);
            }}
          />

          <Button
            title="글 작성하기"
            onClick={() => {
              navigate("/");
            }}
          />      
        </Container>
      </Wrapper>  
  )
}

export default PostWritePage