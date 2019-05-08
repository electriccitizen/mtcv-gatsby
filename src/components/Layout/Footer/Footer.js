import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
const year = new Date().getFullYear();
const styles = theme => ({
    footer: {
        backgroundColor: '#091A29',
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 8,
        color: '#ffffff',
        marginTop: theme.spacing.unit * 12,
    },
    quote: {
        fontSize: 14,
        paddingLeft: theme.spacing.unit * 2,
        color: '#ffffff',
    },
    footernav: {
        paddingRight: theme.spacing.unit * 2,
        textAlign: "right",
        fontSize: 14,
        color: '#fff',
    },
    footerlink: {
        color: '#fff',
    }

});


function Footer(props) {
    const { classes } = props;

    return (
        <div className={classes.footer}>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                    <Typography className={classes.quote} paragraph>
                      Footer content
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <Typography className={classes.footernav}>
                        &copy; {year} Montana Crime Victims
                    </Typography>
                </Grid>
            </Grid>
        </div>

    );
}

export default withStyles(styles)(Footer)
