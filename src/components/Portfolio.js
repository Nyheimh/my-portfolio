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
import hyke from "../images/hyke.png";
import imamiru from "../images/imamiru.jpeg";
import project2 from "../images/google.jpeg";
import project3 from "../images/plantllenial.jpeg";
// import project4 from "../images/google.jpeg";

const useStyles = makeStyles({
  mainContainer: {
    // background: "#03045e",
    // height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto",
  },
});

function Portfolio() {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        {/* Project 1 */}

        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia component="img" alt="Hyke" height="180" image={hyke} />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Hyke
                </Typography>
                <Typography gutterBottom variant="body2">
                  Tech Stack: Ruby on Rails, REST APIs, MaterialUi, PostgreSQL
                  ReactJs
                </Typography>
                <Typography gutterBottom variant="body2" component="p">
                  Hyke is a Full stack application designed for those who
                  like to hike. This application utilizes full CRUD
                  functionality, REST APIs, MaterialUi, and ReactJs.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://hyke.netlify.app/"
                target="_blank"
              >
                Live Demo
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://github.com/Nyheimh/Hyke"
                target="_blank"
              >
                Github
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
                alt="Plantlennial"
                height="180"
                image={project3}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Plantllenial
                </Typography>
                <Typography gutterBottom variant="body2">
                  Tech Stack: React, JavaScript, MaterialUi, and APIs
                </Typography>
                <Typography gutterBottom variant="body2" component="p">
                Plantllenial is a desktop application that serves as a blog for millennials with a passion for plants. This frontend website is built with React, React Router, Axios, CSS, MaterialUI, and third-party API.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://plantlennial.netlify.app"
                target="_blank"
              >
                Live Demo
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://github.com/Nyheimh/Plantlennial"
                target="_blank"
              >
                Github
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Ima Miru"
                height="180"
                image={imamiru}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Ima Miru
                </Typography>
                <Typography gutterBottom variant="body2">
                  Tech Stack: MERN (MongoDB, ExpressJs, ReactJs, NodeJs), Rest
                  APIs, Bootstrap
                </Typography>
                <Typography gutterBottom variant="body2" component="p">
                Ima Miru (Watch Now in Japanese) is a Full-stack application for those with a passion for Anime. This application utilizes full CRUD functionality, REST APIs, Bootstrap, and ReactJs.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://ima-miru.netlify.app/"
                target="_blank"
              >
                Live Demo
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://github.com/Nyheimh/ima-miru"
                target="_blank"
              >
                Github
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
                alt="Google Clone"
                height="200"
                image={project2}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Google Clone
                </Typography>
                <Typography gutterBottom variant="body2">
                  Tech Stack: ReactJs, JavaScript, Bootstrap, Firebase, Third
                  Party API
                </Typography>
                <Typography gutterBottom variant="body2" component="p">
                  Developed a Google Clone of their search engine that allows
                  for a user to search the internet while utilizing Google's
                  API.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://clone-ab656.web.app/"
                target="_blank"
              >
                Live Demo
              </Button>
              <Button
                size="small"
                color="primary"
                href="https://github.com/Nyheimh/Noogle---Google-Clone"
                target="_blank"
              >
                Github
              </Button>
            </CardActions>
          </Card>
        </Grid>


        {/* Project 4 */}
        {/* <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project Name"
                height="160"
                image={project4}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 1
                </Typography>
                <Typography gutterBottom variant="body2">
                  Project 1
                </Typography>
                <Typography gutterBottom variant="body2" component="p">
                  Lorem ipsum for P1
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Live Demo
              </Button>
              <Button size="small" color="primary">
                Github
              </Button>
            </CardActions>
          </Card>
        </Grid> */}
      </Grid>
    </Box>
  );
}

export default Portfolio;
