import React from 'react';

import SHOP_DATA from '../../pages/shop/shop.data';

import CollectionPreview from '../collection-preview/collection-preview.component';

import './collections-overview.styles.scss';

class CollectionsOverview extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA
    }
  };

  render() {
    const { collections } = this.state;
    return(
      <div className='collections-overview'>
        {
          collections.map(({ id, ...otherProps }) => {
            return <CollectionPreview key={id} {...otherProps} />
          })
        }
      </div>
    );
  };
}

export default CollectionsOverview;