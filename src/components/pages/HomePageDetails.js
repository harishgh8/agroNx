import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Container,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
  },
  header: {
    textAlign: "center",
    marginBottom: theme.spacing(5),
    color: "#fff",
  },
  card: {
    maxWidth: 345,
    // backgroundColor: "transparent",
    opacity: 0.6,
  },
  media: {
    height: "400px",
    opacity: 1,
  },
}));

const HomePageDetails = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h2" className={classes.header}>
        Biotechnology Solutions for a Better Future
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={require("../../images/heroImages/rndlogo.png")}
                title="Research and Development"
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Research and Development
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Our team of experts are dedicated to conducting cutting-edge
                  research and development to bring new biotechnologies to
                  market.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={require("../../images/heroImages/productionlogo.png")}
                title="Production and Manufacturing"
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Production and Manufacturing
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Our state-of-the-art facilities allow us to efficiently
                  produce and manufacture high-quality biotechnologies.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://your-image-url.com/distribution.jpg"
                title="Distribution and Support"
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Distribution and Support
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  We are committed to providing excellent customer support and
                  efficient distribution of our biotechnologies to customers
                  worldwide.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePageDetails;
