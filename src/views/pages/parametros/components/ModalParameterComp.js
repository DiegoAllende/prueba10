import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Grid, Backdrop } from '@material-ui/core';
import { Form, Formik } from 'formik';
import { TitleModal } from 'components/ui/TitleModal';

export const ModalParameterComp = ({ open, onClose, savaParameter, editParameter, data, validatinsFields }) => {
  const initData = data.datos;

  const btnSave = (values) => {
    if (data.isEdit) {
      editParameter(values);
    } else {
      savaParameter(values);
    }
  }

  return (
    <div>
      <Dialog open={open} maxWidth="md" scroll="body" disableEscapeKeyDown>
        <Formik
          initialValues={initData}
          validate={validatinsFields}
          onSubmit={btnSave}
        >
          {
            ({ handleChange, errors, values }) =>
              <Form autoComplete="off" noValidate>
                <TitleModal title={data.isEdit ? 'Modificar parámetro' : 'Nuevo parámetro'} onClose={onClose} />
                <DialogContent>
                  <Grid container spacing={2}>

                    <Grid item xs={2}>
                      <TextField name="group_code" label="Código" onChange={handleChange} value={values.group_code} error={errors.group_code ? true : false} helperText={errors.group_code} size="small" fullWidth />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField name="group" label="Grupo" onChange={handleChange} value={values.group} error={errors.group ? true : false} helperText={errors.group} size="small" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField name="long_description" label="Descripción larga" onChange={handleChange} value={values.long_description} error={errors.long_description ? true : false} helperText={errors.long_description} size="small" fullWidth />
                    </Grid>

                    <Grid item xs={2}>
                      <TextField name="thematic_code" label="Código" onChange={handleChange} value={values.thematic_code} error={errors.thematic_code ? true : false} helperText={errors.thematic_code} size="small" fullWidth />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField name="thematic" label="Temática" onChange={handleChange} value={values.thematic} error={errors.thematic ? true : false} helperText={errors.thematic} size="small" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField name="short_description" label="Descripción corta" onChange={handleChange} value={values.short_description} error={errors.short_description ? true : false} helperText={errors.short_description} size="small" fullWidth />
                    </Grid>

                    <Grid item xs={3}>
                      <TextField name="percentage" label="Porcentaje" onChange={handleChange} value={values.percentage} error={errors.percentage ? true : false} helperText={errors.percentage} size="small" fullWidth />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField name="number" label="Número" onChange={handleChange} value={values.number} error={errors.number ? true : false} helperText={errors.number} size="small" fullWidth />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField name="rank_1" label="Rango 1" onChange={handleChange} value={values.rank_1} error={errors.rank_1 ? true : false} helperText={errors.rank_1} size="small" fullWidth />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField name="rank_2" label="Rango 2" onChange={handleChange} value={values.rank_2} error={errors.rank_2 ? true : false} helperText={errors.rank_2} size="small" fullWidth />
                    </Grid>

                  </Grid>
                </DialogContent>
                <DialogActions>
                  <Button type="submit" color="primary">
                    {data.isEdit ? 'Actualizar parámetro' : 'Registrar parámetro'}
                  </Button>
                </DialogActions>
              </Form>
          }
        </Formik>
      </Dialog>
    </div>
  )
}
