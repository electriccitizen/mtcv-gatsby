import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import OfflineBolt from '@material-ui/icons/OfflineBolt';

//import Apps from '@material-ui/icons/Apps';

const styles = theme => ({
  wrapper: {
     display: 'inline',
      float: 'right',

    },
  button: {
    margin: theme.spacing.unit,
    float: 'left',
  },
  rightIcon: {
    marginRight: 10,
  }
});

function CustomButton(props) {
  const { classes } = props;
  return (
    <>
      <div className={classes.wrapper}>
    {
        props.buttons.map((item, key) => {
            return (
                <Button variant={item.field_button_style} size={item.field_button_size} color={item.field_button_color} className={classes.button} href={item.field_button_link.uri}>
                  <OfflineBolt className={classes.rightIcon} />
                  {item.field_button_text}
                </Button>
            );

        })
      }

      </div>
      </>
  );
}

export default withStyles(styles)(CustomButton)
