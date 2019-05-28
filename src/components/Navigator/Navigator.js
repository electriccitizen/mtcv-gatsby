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
import Button from '@material-ui/core/Button';
import { Link } from "gatsby"
import { navA } from "../../hooks/nav-a"

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
  },
  button: {
    textAlign: 'right',
    display: 'block',
    width: '100%',
  }
}));


function HelpTool() {

  const classes = useStyles();
  const nav = navA()

  return (
    <div >
    <Container maxWidth="sm">
      <Box className={classes.navigator}>
        <CardActionArea>
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
                  >
                  {
                    nav.edges.map((item, key) => {
                      return (
                        <FormControlLabel value={item.node.name} control={<Radio />} label={item.node.name} />
                      );
                    })
                  }
                  </RadioGroup>
                </FormControl>

                <div className={classes.button}>
                  <Link to="/help2">
                  <Button variant="contained" color="secondary" size="small" >
                    Get started
                  </Button>
                  </Link>
                </div>
                <div className={classes.help}>

                <Typography variant="body2">Answer to the best of your ability, and we will match
                  you with resources available in your area.
                </Typography>
                </div>
              </CardContent>
            </Card>
        </CardActionArea>
      </Box>
    </Container>
    </div>
  );
}

export default function Navigator() {

  return (
    <>
      <HelpTool />
    </>
    );
}
