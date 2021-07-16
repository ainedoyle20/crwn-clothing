import React from 'react';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

import './shop.styles.scss';

const Shop = () => {
  return(
    <div className='shop-page'>
      <CollectionsOverview />
    </div>
  );
};

export default Shop;