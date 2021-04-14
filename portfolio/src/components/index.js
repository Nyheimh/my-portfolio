import Navbar from "./Navbar"
import Header from "./Header"
// import Resume from "./Resume"
import Particles from "react-tsparticles"
import { makeStyles } from "@material-ui/styles"


const useStyles = makeStyles({
  particlesCanva: {
    position: "absolute"
  }

})

function Home() {

  const classes = useStyles()

  return (
    <div>
      <Navbar />
      <Header />
      {/* <Resume /> */}
      <Particles
        canavasClassName={classes.particlesCanva}
        params={{
          particles: {
            number: {
              value: 45,
              density: {
                enable: true,
                value_area: 900
              }
            },
            type: "stars",
            strole: {
              width: 1,
              color: "tomato"
            },
            size: {
              value: 8,
              random: true,
              anim: {
                enable: false,
                speed: 6,
                size_min: 0.5,
                sync: true,
              }
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              }
            }
          }
        }}
      />
    </div>
  )
}

export default Home
