import { Avatar, Badge, withStyles } from '@material-ui/core';
import React from 'react';
import './Header.css';

const SmallAvatar = withStyles((theme) => ({
  root: {
    width: 25,
    height: 25,
    border: `2px solid ${theme.palette.background.paper}`,
    cursor: 'pointer'
  },
}))(Avatar);

export const HeaderComp = () => {
  return (
    <header className="header">
      <Badge
        overlap="circular"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        badgeContent={<SmallAvatar alt="Cambiar empresa" title="Cambiar empresa" src="./assets/img/avatar.jpg" />}
      >
        <Avatar alt="logo" src="./assets/img/avatar.jpg" className="header-logo" />
      </Badge>
      <div className="header-titulo">Mis autorizaciones</div>
      <div className="header-user">
        <span>Hola, Diego Sanchez Allende</span>
        <Avatar alt="avatar" src="./assets/img/avatar.jpg" className="header-user-avatar" />
      </div>
    </header>
  )
}
