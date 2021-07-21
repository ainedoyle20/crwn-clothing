import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForShop } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../collection-preview/collection-preview.component';

import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => {
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

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForShop
});

export default connect(mapStateToProps)(CollectionsOverview);