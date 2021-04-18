import React from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/styles";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  CardActionArea,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import project1 from "../images/google.jpeg";
import project2 from "../images/google.jpeg";
import project3 from "../images/google.jpeg";
import project4 from "../images/google.jpeg";


const useStyles = makeStyles({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    // margin: "3rem",
    margin: "5rem auto"
  }
})


function Portfolio() {

  const classes = useStyles()

  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project Name"
                height="160"
                image={project1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 1
                </Typography>
                <Typography gutterBottom variant="body2">
                  Project 1
                </Typography>
                <Typography gutterBottom variant="textSecondary" component="p">
                  Lorem ipsum for P1
                </Typography>
              </CardContent>
            </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
          </Card>
          </Grid>

          {/* Project 2 */}
          <Grid item xs={12} sm={8} md={6}>

          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project Name"
                height="140"
                image={project2}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 1
                </Typography>
                <Typography gutterBottom variant="body2">
                  Project 1
                </Typography>
                <Typography gutterBottom variant="textSecondary" component="p">
                  Lorem ipsum for P1
                </Typography>
              </CardContent>
            </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
          </Card>
          </Grid>

        {/* Project 3 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project Name"
                height="140"
                image={project3}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 1
                </Typography>
                <Typography gutterBottom variant="body2">
                  Project 1
                </Typography>
                <Typography gutterBottom variant="textSecondary" component="p">
                  Lorem ipsum for P1
                </Typography>
              </CardContent>
            </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
          </Card>
        </Grid>

{/* Project 4 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project Name"
                height="140"
                image={project4}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 1
                </Typography>
                <Typography gutterBottom variant="body2">
                  Project 1
                </Typography>
                <Typography gutterBottom variant="textSecondary" component="p">
                  Lorem ipsum for P1
                </Typography>
              </CardContent>
            </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
          </Card>
        </Grid>


      </Grid>
    </Box>
  );
}

export default Portfolio;
