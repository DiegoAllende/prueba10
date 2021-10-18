import React from 'react';
import { IconButton, InputAdornment, TextField } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import { NavLink } from 'react-router-dom'
import './Nav.css';

export const NavComp = () => {
  return (
    <nav className="nav">
      <NavLink to="/homologadas" activeClassName="active">Homologadas</NavLink>
      <NavLink to="/parametros" activeClassName="active">Parametros</NavLink>
      <NavLink to="/dimensiones" activeClassName="active">Dimensiones</NavLink>
      <NavLink to="/visor" activeClassName="active">Visor</NavLink>

      <TextField
      className="nav-search"
        name="nombre"
        autoComplete="off"
        label="Buscar autorización..."
        variant="outlined" size="small"
        InputProps={{
          endAdornment:
            <InputAdornment position="end">
              <IconButton edge="end" size="small">
                <SearchIcon/>
              </IconButton>
            </InputAdornment>,
        }}
      />

    </nav>
  )
}
