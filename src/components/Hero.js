import { Grid, Typography, Card, CardMedia, CardContent } from "@mui/material";
import React, { useState, useEffect } from "react";

const images = [
  {
    src: require("../images/2.jpg"),
    text: "The magic of growth, unfolding before us",
  },
  {
    src: require("../images/4.jpg"),
    text: "Fields of green, where dreams are made",
  },
  {
    src: require("../images/5.jpg"),
    text: "A field of strength, in every flowers",
  },
  {
    src: require("../images/6.jpg"),
    text: "The promise of growth, in every new seedling",
  },
];

const Hero = () => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs={12}>
        <Card>
          <CardMedia
            component="img"
            width="100%"
            src={images[imageIndex].src}
            title="Hero Image"
          />
          <CardContent sx={{ position: "absolute", top: 300, left: 50 }}>
            <Typography variant="h3" color="#fff">
              {images[imageIndex].text}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Hero;
