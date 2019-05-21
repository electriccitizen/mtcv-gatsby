import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea'
import { CardContent } from '@material-ui/core'
import CardHeader from '@material-ui/core/CardHeader'
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  navigator: {
    minHeight: 200,
    marginBottom: '6em',
  },
  header: {
    backgroundColor: '#ccc',
    fontSize: '14px',
    padding: '1em',
    fontWeight: 500,


  },
  stripe: {
    backgroundColor: theme.palette.primary.dark,
    width: '99.225vw',
    position: 'relative',
    left: '50%',
    marginLeft: '-49.59vw',
    marginBottom: '2em',
    padding: '0em',
  },
  help: {
    padding: '1em',
  }
}));


function HelpTool() {

  const classes = useStyles();
  const [value] = React.useState('female');

  return (
    <div >
    <Container maxWidth="sm">
      <Box className={classes.navigator}>
        <CardActionArea>
          <Link to="/help">
            <Card>
              <CardHeader
                classes={{
                  title: classes.header,
                }}
                title="Have you or somebody you know been the victim of a crime?"
                color="primary"
                size="small"
              />
              <CardContent>
                <FormControl component="fieldset" className={classes.formControl}>
                  <RadioGroup
                    aria-label="Gender"
                    name="gender1"
                    className={classes.group}
                    value={value}
                  >
                  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                  <FormControlLabel value="notsure" control={<Radio />} label="I'm not sure" />
                  </RadioGroup>
                </FormControl>
                <div className={classes.help}>
                <Typography variant="body2">Answer to the best of your ability, and we will match
                  you with resources available in your area.
                </Typography>
                </div>
              </CardContent>
            </Card>
          </Link>
        </CardActionArea>
      </Box>
    </Container>
    </div>
  );
}

export default function Navigator2() {

  return (
    <>
      <HelpTool />
    </>
    );
}
