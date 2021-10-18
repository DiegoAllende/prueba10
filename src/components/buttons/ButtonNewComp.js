import React from 'react'
import { Button } from '@material-ui/core';

export const ButtonNewComp = ({ handleClickNew, title }) => {
    return (
        <Button 
            onClick={handleClickNew}
            variant="outlined"
            size="medium"
            color="primary"
            style={{ color: '#1AA9DF', borderRadius: '50px', marginBottom: '15px', padding: '5px 24px', 
                    fontWeight: 'bold', textTransform: 'none' }}
        >
            {title}
        </Button >
    )
}
