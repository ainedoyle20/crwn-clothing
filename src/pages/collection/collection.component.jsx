import React from 'react';
import { connect } from 'react-redux';

import { selectCollectionPageCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';


const CollectionPage = ({ collection: {title, items} }) => {
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='collection-items'>
      {
        items.map((item) => <CollectionItem key={item.id} item={item} />)
      }
      </div>
    </div>
  )
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollectionPageCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);