import React from 'react';

import { GroupContainer, FormInputContainer, FormInputLabelContainer } from './form-input.styles';

const FormInput = ({ onChange, label, ...otherProps }) => {
  return(
    <GroupContainer>
      <FormInputContainer onChange={onChange} {...otherProps} />
      {
        label 
        ? (<FormInputLabelContainer
            className={otherProps.value.length ? 'shrink' : ''}
        >{label}</FormInputLabelContainer>)
        : null
      }
    </GroupContainer>
  );
};

export default FormInput;