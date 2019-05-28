import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "gatsby"
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  teaser: {
  },
  center: {
    textAlign: 'center',
    background: 'red',
    width: '100%',
  },
  button: {
    marginBottom: '1em',
    marginLeft: '.5em',
  }
});

function Teasers() {
  const classes = useStyles();

  return (
    <div className={classes.teaser}>
    <Grid container justify="center" spacing={0}>
      <Grid item align="center" lg={6}>
        <Card className={classes.card}>
          <CardActionArea>

            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="../../images/folder.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Safe browsing
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions className={classes.button}>

              <Link to="/safe-browsing">
            <Button variant="contained" color="secondary" size="small" >
              Learn More
            </Button>

          </Link>
              </CardActions>
          </CardActionArea>

        </Card>
      </Grid>
      <Grid item lg={6} align="center">

        <Card className={classes.card}>

          <CardActionArea>

            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="../../images/search.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
               Self-help library
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions className={classes.button}>

              <Link  to="/library" className={classes.card}>
            <Button variant="contained" size="small" color="secondary">
              Learn More
            </Button>
              </Link>
          </CardActions>

          </CardActionArea>

        </Card>      </Grid>
    </Grid>
    </div>
  );
}

export default Teasers;
