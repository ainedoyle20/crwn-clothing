import styled from 'styled-components';

export const MenuItemBackgroundImage = styled.div`
  width: 100%;
  height:100%;
  position: center;
  background-size: cover;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`}
`;

export const MenuContentContainer = styled.div`
  height: 90px;
  border: 1px solid black;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  opacity: 0.7;
  position: absolute;
`;

export const MenuItemContainer = styled.div`
  min-width: 30%;
  height: ${({size}) => (size ? '380px' : '240px')};
  flex: 1 1 auto;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 7.5px 15px;
  overflow: hidden;
  cursor: pointer;

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  &:hover {
    ${MenuItemBackgroundImage} {
      transform: scale(1.1);
      transition: 6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    ${MenuContentContainer} {
      opacity: 0.9;
    }
  }
`;

export const MenuContentTitle = styled.h2`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

export const MenuContentSubtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;



