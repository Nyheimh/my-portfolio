import React from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/styles";
import {
  Box,
  Grid,
  Container,
  Card,
  CardContent,
  CardActions,
  CardActionArea,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import project1 from "../images/google.jpeg";

function Portfolio() {
  return (
    <Box component="div">
      <Navbar />
      <Grid container justify="center" alignItems="center">
        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project Name"
                height="140"
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
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Portfolio;
