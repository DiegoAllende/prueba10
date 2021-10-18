import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Grid } from '@material-ui/core';
import { Form, Formik } from 'formik';

export const ModalDimensionComp = ({ open, onClose, btnAction }) => {
  const initialData = { id: 0, codigo: '', desShort: '', desLong: '' }
  const validatinsFields = (values) => {
    const errors = {}
    if (!values.codigo) errors.codigo = 'Campo es requerido 1'
    if (!values.desShort) errors.desShort = 'Campo es requerido 2'
    if (!values.desLong) errors.desLong = 'Campo es requerido 3'
    return errors;
  }

  const btnSave = (values) => {
    console.log("formu: ", values);
  }

  return (
    <div>
      <Dialog open={open} maxWidth="sm" BackdropProps={{ timeout: 500 }} scroll="body" disableEscapeKeyDown>
        <Formik
          initialValues={initialData}
          validate={validatinsFields}
          onSubmit={btnSave}
        >
          {
            ({ handleChange, isSubmitting, errors, values }) =>
              <Form>
                <DialogTitle>Nueva dimensión</DialogTitle>
                <Button color="primary" onClick={onClose}>X</Button>
                <DialogContent>
                  <Grid container spacing={2}>
                  <Grid item xs={6}>
                      <TextField name="id" type="number" onChange={handleChange} value={values.id} label="web name" error={errors.id ? true : false} helperText={errors.id} size="small" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField name="codigo" onChange={handleChange} value={values.codigo} label="web name" error={errors.codigo ? true : false} helperText={errors.codigo} size="small" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField name="desShort" onChange={handleChange} value={values.desShort} label="field name" error={errors.desShort ? true : false} helperText={errors.desShort} size="small" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField name="desLong" onChange={handleChange} value={values.desLong} label="field type" error={errors.desLong ? true : false} helperText={errors.desLong} size="small" fullWidth />
                    </Grid>

                  </Grid>
                </DialogContent>
                <DialogActions>
                  <Button type="submit" color="primary">
                    Guardar
                  </Button>
                </DialogActions>
              </Form>
          }
        </Formik>
      </Dialog>
    </div >
  )
}
