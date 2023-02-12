import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Button, Card, Paper, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(2),
  },

  button: {
    margin: theme.spacing(1),
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <Paper
      className={classes.root}
      sx={{ height: "90vh", backgroundColor: grey[300] }}
    >
      <Card sx={{ my: 10, mx: 5, backgroundColor: grey[300] }} elevation={0}>
        <Typography variant="h5" component="h3">
          Contact Us
        </Typography>
        <Typography component="p">You can reach us at:</Typography>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<MailOutlineIcon />}
          href="mailto:info@agronexus.com"
        >
          info@agronexus.com
        </Button>
        &nbsp;
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<LocationOnOutlinedIcon />}
          href="https://maps.google.com/?q=Example+Office+Location"
          target="_blank"
          rel="noopener noreferrer"
        >
          Example Office Location
        </Button>
      </Card>
    </Paper>
  );
}
