import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    maxWidth: 300,
    width: '100%',
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));


const RegionFilter = (props) => {
  const classes = useStyles();

  return (
    <>
      <FormControl className={classes.formControl}>

        <FormLabel component="legend">Where do you live?</FormLabel>

          {props.items.edges.map(items =>
            <FormControlLabel
                      control={
                        <Checkbox value="gilad" />
                      }
                      label={items.node.name}
                    />
            )}


      </FormControl>
    </>
  );
};

export default RegionFilter;