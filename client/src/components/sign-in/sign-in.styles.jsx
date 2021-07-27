import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 90vw;
    margin-bottom: 30px;
  }
`;

export const SignInTitleContainer = styled.h2`
  margin: 10px 0;
`;

export const SignInButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

