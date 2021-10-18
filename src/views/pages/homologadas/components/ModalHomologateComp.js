import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Grid, MenuItem } from '@material-ui/core';

export const ModalHomologateComp = ({ open, onClose }) => {

  const handleSave = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div>
      <Dialog open={open} maxWidth="md" BackdropProps={{ timeout: 500 }} scroll="body" disableEscapeKeyDown>
        <form autoComplete="off" noValidate onSubmit={handleSave}>
          <DialogTitle>Nuevo código</DialogTitle>
          <DialogContent>

            <Grid container spacing={2}>

              <Grid item xs={4}>
                <TextField id="select" label="Código Iso Origen" value="" error={false} helperText="" select fullWidth>
                  <MenuItem value="10">Ten</MenuItem>
                  <MenuItem value="20">Twenty</MenuItem>
                  <MenuItem value="30">Twenty</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={8}>
                <TextField name="user2" label="Descripción corta" error={false} helperText="" size="small" fullWidth />
              </Grid>

              <Grid item xs={4}>
                <TextField id="select" label="Código Int Origen" value="" error={false} helperText="" select fullWidth>
                  <MenuItem value="10">Ten</MenuItem>
                  <MenuItem value="20">Twenty</MenuItem>
                  <MenuItem value="30">Twenty</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={8}>
                <TextField name="user2" label="Descripción corta" error={false} helperText="" size="small" fullWidth />
              </Grid>

              <Grid item xs={2}>
                <TextField name="user" error={false} helperText="" label="Código Iso Cat" size="small" fullWidth />
              </Grid>
              <Grid item xs={4}>
                <TextField name="user2" error={false} helperText="" label="Descripción corta" size="small" fullWidth />
              </Grid>
              <Grid item xs={6}>
                <TextField name="user" error={false} helperText="" label="Descripción larga" size="small" fullWidth />
              </Grid>

              <Grid item xs={2}>
                <TextField name="user" error={false} helperText="" label="Código Int Cat" size="small" fullWidth />
              </Grid>
              <Grid item xs={4}>
                <TextField name="user2" error={false} helperText="" label="Descripción corta" size="small" fullWidth />
              </Grid>
              <Grid item xs={6}>
                <TextField name="user" error={false} helperText="" label="Descripción larga" size="small" fullWidth />
              </Grid>

              <Grid item xs={4}>
                <TextField id="select" label="Tarjeta" value="" error={false} helperText="" select multiple fullWidth>
                  <MenuItem value="20">VISA</MenuItem>
                  <MenuItem value="30">MASTERCARD</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={4}>
                <TextField id="select" label="Procesadora" value="" error={false} helperText="" select fullWidth>
                  <MenuItem value="20">UBA</MenuItem>
                  <MenuItem value="30">IZIPAY</MenuItem>
                </TextField>
              </Grid>

            </Grid>

          </DialogContent>
          <DialogActions>
            <Button type="submit" color="primary">
              Guardar
          </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  )
}
