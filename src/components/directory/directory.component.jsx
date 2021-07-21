import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectoryData } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = ({ sections }) => {
  return(
    <div className='directory-menu'>
    {
      sections.map(({ id, ...otherProps }) => {
        return <MenuItem key={id} {...otherProps} />
      })
    }
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectoryData
})

export default connect(mapStateToProps)(Directory);