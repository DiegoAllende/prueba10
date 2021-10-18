import React from 'react'
import { Card, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    marginBottom: '20px',
    boxShadow: '0px 0px 2px 3px rgba(0,0,0,0.05)'
  },
  content: {
    padding: '16px !important'
  }
});

export const CardContentComp = ({children}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
        <CardContent className={classes.content}>
          {children}
        </CardContent>
      </Card>
  )
}
