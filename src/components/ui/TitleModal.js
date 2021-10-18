import React from 'react'
import { DialogTitle } from '@material-ui/core'

export const TitleModal = ({title,onClose}) => {
  return (
    <DialogTitle className="ds-title-modal">
      {title}
      <button className="ds-close-modal" onClick={onClose}>X</button>
    </DialogTitle>
  )
}
