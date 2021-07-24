import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectoryData } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import { DirectoryContainer } from './directory.styles';

const Directory = ({ sections }) => {
  return(
    <DirectoryContainer>
    {
      sections.map(({ id, ...otherProps }) => {
        return <MenuItem key={id} {...otherProps} />
      })
    }
    </DirectoryContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectoryData
})

export default connect(mapStateToProps)(Directory);