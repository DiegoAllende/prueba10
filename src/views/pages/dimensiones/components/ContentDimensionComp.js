import React from 'react'
import { Grid } from '@material-ui/core'
import { CardContentComp } from 'components/cards/CardContentComp';
import { ButtonMasComp } from 'components/buttons/ButtonMasComp';

export const ContentDimesionComp = ({valor}) => {

  const showHomolagor = () => {
    console.log("edit", valor);
  }

  return (
    <CardContentComp>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid container item xs={3}>
          <Grid item xs={12} sm={6}>
            <span>icono1</span>
          </Grid>
          <Grid item xs={12} sm={6}>
            <span>icono2</span>
          </Grid>
        </Grid>

        <Grid container item xs={4}>
          <Grid item xs={12} sm={6}>
            <span>Interno: 075</span>
          </Grid>
          <Grid item xs={12} sm={6}>
            <span>IN INVALIDO</span>
          </Grid>
        </Grid>

        <Grid container item xs={4}>
          <Grid item xs={12} sm={6}>
            <span>ISO: 80</span>
          </Grid>
          <Grid item xs={12} sm={6}>
            <span>IN INVALIDO</span>
          </Grid>
        </Grid>

        <Grid container item xs={1} justifyContent="center" alignItems="center" style={{ padding: '0px' }}>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <ButtonMasComp handleClick={showHomolagor}/>
          </Grid>
        </Grid>

      </Grid>
    </CardContentComp>
  )
}
