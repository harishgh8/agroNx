import React from "react";
import {
  Backdrop,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Fade,
  Modal,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",

    justifyContent: "space-between",
  },
}));
const products = [
  {
    name: "Product 1",
    description: "This is a description for Product 1.",
    image: "https://www.pngegg.com/en/png-yyesq",
  },

  {
    name: "Product 2",
    description: "This is a description for Product 2.",
    image: "https://www.pngegg.com/en/png-spuhz",
  },

  {
    name: "Product 3",
    description: "This is a description for Product 3.",
    image: "https://www.pngegg.com/en/png-hfgle",
  },

  {
    name: "Product 4",
    description: "This is a description for Product 4.",
    image: "https://www.pngegg.com/en/png-ckjwv",
  },

  {
    name: "Product 5",
    description: "This is a description for Product 5.",
    image: "https://www.pngegg.com/en/png-zaecb",
  },
];

const Products = ({ product }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card className={classes.cardContainer}>
      {products.map((product) => (
        <>
          <CardActionArea onClick={handleOpen}>
            <CardMedia
              image={product.image}
              title={product.name}
              sx={{ display: "flex", flexDirection: "column" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {product.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {product.description}
              </Typography>
            </CardContent>
          </CardActionArea>

          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <h2 id="transition-modal-title">{product.name}</h2>
                <p id="transition-modal-description">{product.description}</p>
              </div>
            </Fade>
          </Modal>
        </>
      ))}
    </Card>
  );
};

export default Products;
