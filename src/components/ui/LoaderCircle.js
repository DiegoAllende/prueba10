import React from 'react'
import { CircularProgress, Modal } from '@material-ui/core'

export const LoaderCircle = ({ open }) => {
  return (
    <Modal open={open} BackdropProps={{ timeout: 500 }} closeAfterTransition>
      <div style={{display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <CircularProgress style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }} />
      </div>
    </Modal>
  )
}

