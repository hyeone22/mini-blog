import React from 'react'
import styled from 'styled-components';

const FooterContainer = styled.div`
display :flex;
justify-content: center;
align-items: center;
padding: 20px 0;
box-sizing:border-box;
border-top: 1px solid rgb(25, 25, 25);
width: 100%;
position: relative;
z-index: 100;

@media (max-width: 768px) {
  padding: 20px 20px 30px;
}

`;

const FooterContent = styled.div``;

const FooterLinkContainer = styled.div`
  width: 100%;
  
  @media (max-width: 500px) {
    width: 100%;
  }
  `;

const FooterLinkTitle = styled.p`
  color: green;
  font-size: 17px;
  font-weight: bold;
  text-align: center;
`;

const FooterLinkContent = styled.div`
display: flex;
justify-content: space-between;
margin-top: 30px;
@media (max-width: 500px) {
  margin-top: 26px;
}
`;

const FooterLink = styled.a`
color: gray;
font-size: 13px;
width: 160px;
margin-bottom: 5px;
text-decoration: none;
text-align: center;
&:hover {
  text-decoration: underline;
}

@media (max-width: 500px) {
  margin-bottom: 16px;
}
`;

const FooterDescContainer = styled.div`
  margin-top: 30px;
  @media (max-width: 500px) {
    margin-top: 20px;
  }
`;

const FooterDescRights = styled.p`
  color: #fff;
  font-size: 14px;
  text-align: center;
  `;



function Footer() {
  return (
    <FooterContainer>
    <FooterContent>
      <FooterLinkContainer>
        <FooterLinkTitle>Hyeone's Blog</FooterLinkTitle>
        <FooterLinkContent>
          <FooterLink href="https://section.blog.naver.com/BlogHome.naver?directoryNo=0&currentPage=1&groupId=0">블로그 소개</FooterLink>
          <FooterLink href="http://help.netflix.com/ko">이용약관</FooterLink>
          <FooterLink href="http://help.netflix.com/ko/">블로그 서비스 운영정책</FooterLink>
          <FooterLink href="http://help.netflix.com/ko/">개인정보처리방침</FooterLink>
          <FooterLink href="http://help.netflix.com/ko/">책임의 한계와 법적고지</FooterLink>
          <FooterLink href="http://help.netflix.com/ko/">글 권리 보호하기</FooterLink>
          <FooterLink href="http://help.netflix.com/ko/">게시중단요청서비스</FooterLink>  
        </FooterLinkContent>
        <FooterDescContainer>
          <FooterDescRights>All Rights Reserved.</FooterDescRights>  
        </FooterDescContainer>  
      </FooterLinkContainer>  
    </FooterContent>  
  </FooterContainer>
  )
}

export default Footer
