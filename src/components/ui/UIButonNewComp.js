import React from 'react'
import { Grid } from '@material-ui/core';
import { ButtonNewComp } from '../buttons/ButtonNewComp';

export const UIButtonNewComp = ({ handleClickNew, title }) => {
    return (
        <Grid container item xs={12} justifyContent="flex-end" alignItems="center">
            <Grid item xs={12} style={{ textAlign: 'end' }}>
                <ButtonNewComp handleClickNew={handleClickNew} title={title} />
            </Grid>
        </Grid>


    )
}