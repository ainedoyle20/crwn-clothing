import React from 'react';
import { withRouter } from 'react-router-dom';

import { MenuItemContainer, MenuItemBackgroundImage, MenuContentContainer, MenuContentTitle, MenuContentSubtitle } from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history }) => {
  return(
    <MenuItemContainer size={size} onClick={() => history.push(`shop/${title.toLowerCase()}`)}>
      <MenuItemBackgroundImage imageUrl={imageUrl}
      ></MenuItemBackgroundImage>
      <MenuContentContainer>
        <MenuContentTitle>{title.toUpperCase()}</MenuContentTitle>
        <MenuContentSubtitle>SHOP NOW</MenuContentSubtitle>
      </MenuContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);