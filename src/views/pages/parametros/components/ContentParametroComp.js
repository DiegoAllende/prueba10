import React from 'react'
import { Grid } from '@material-ui/core'
import { CardContentComp } from 'components/cards/CardContentComp';
import { ButtonMasComp } from 'components/buttons/ButtonMasComp';

export const ContentParametroComp = ({data, getDataEdit}) => {

  const sendData = () => {
    getDataEdit(data, true);
  }

  return (
    <CardContentComp>
      <Grid container spacing={2}>

        <Grid container item xs={2} justifyContent="space-between" alignItems="center">
          <Grid item xs={12}>
            <div>{data.group}</div>
          </Grid>
          <Grid item xs={12}>
            <div className="ds-bold">{data.thematic}</div>
          </Grid>
        </Grid>

        <Grid container item xs={4}>
          <Grid item xs={12}>
            <div><span>Código </span><span className="ds-bold">{data.group_code}</span></div>
            <div><span>Código de plan de acción </span><span className="ds-bold">{data.thematic_code}</span></div>
            <div><span>Descripción larga </span><span className="ds-bold">{data.long_description}</span></div>
          </Grid>
        </Grid>

        <Grid container item xs={4}>
          <Grid item xs={12}>
            <div><span>Segemento </span><span className="ds-bold">{data.percentage}%</span></div>
            <div><span>Número </span><span className="ds-bold">{data.number}</span></div>
            <div><span>Descripción corta </span><span className="ds-bold">{data.short_description}</span></div>
          </Grid>
        </Grid>

        <Grid container item xs={1} justifyContent="space-between" alignItems="center">
          <Grid item xs={12}>
            <div><span>Rango 1 </span><span className="ds-bold">{data.rank_1}</span></div>
          </Grid>
          <Grid item xs={12}>
            <div><span>Rango 2 </span><span className="ds-bold">{data.rank_2}</span></div>
          </Grid>
        </Grid>

        <Grid container item xs={1} justifyContent="center" alignItems="center" style={{ padding: '0px' }}>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <ButtonMasComp handleClick={sendData}/>
          </Grid>
        </Grid>

      </Grid>
    </CardContentComp>
  )
}
