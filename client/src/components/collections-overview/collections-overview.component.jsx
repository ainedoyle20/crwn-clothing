import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForShop } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { CollectionsOverviewContainer } from './collections-overview.styles';

const CollectionsOverview = ({ collections }) => {
  return(
    <CollectionsOverviewContainer>
      {
        collections.map(({ id, ...otherProps }) => {
          return <CollectionPreview key={id} {...otherProps} />
        })
      }
    </CollectionsOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForShop
});

export default connect(mapStateToProps)(CollectionsOverview);