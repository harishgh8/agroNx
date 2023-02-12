import React from "react";
import { Typography, Container } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h4" gutterBottom>
        About Our Company
      </Typography>
      <Typography variant="body1" gutterBottom>
        Our company is dedicated to providing top-notch services and products to
        our customers. We believe in the importance of innovation and
        continuously strive to improve the quality of our offerings.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Our team is composed of highly skilled and passionate individuals who
        work together to bring our vision to life. We are committed to making a
        positive impact in the lives of our customers and in the world.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Our Motto
      </Typography>
      <Typography variant="body1">"Excellence in everything we do."</Typography>
    </Container>
  );
};

export default About;
