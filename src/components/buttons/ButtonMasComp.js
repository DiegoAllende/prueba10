import React from 'react'
import { IconButton } from '@material-ui/core'
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';

export const ButtonMasComp = ({handleClick}) => {
  return (
    <IconButton onClick={handleClick} variant="contained" style={{ padding: 0, color: '#1AA9DF' }}>
      <AddCircleRoundedIcon style={{ fontSize: 40 }} />
    </IconButton>
  )
}
