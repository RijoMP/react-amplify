import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0),
    },
  },
  card: {
    maxWidth: '50%',
    margin: 'auto',
    marginTop: '10%',
  },
}));

const CreateEmployee = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [position, setPosition] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/createEmployee', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, age, position }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setName('');
        setAge('');
        setPosition('');
      })
      .catch((error) => console.error(error));
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <h2>Create Employee</h2>
        <form className={classes.root} onSubmit={handleSubmit}>
          <Grid container  alignItems="center" justify="center">
            <Grid item xs={6} sm={6}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                alignItems="center" 
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Age"
                variant="outlined"
                value={age}
                onChange={(event) => setAge(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Position"
                variant="outlined"
                value={position}
                onChange={(event) => setPosition(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Create
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreateEmployee;
