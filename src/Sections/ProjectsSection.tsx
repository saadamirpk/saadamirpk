import { Row, Text, Grid, Button } from "@nextui-org/react";
import React from "react";
import ProjectCard from "../Components/ProjectCard";
import nextui from "../Images/nextui.jpeg";
import suroor from "../Images/suroor.gif";

export default function ProjectsSection(props: any) {
  return (
    <section id="projects">
      <Row justify="center" align="center" css={{ mt: "80px" }}>
        <Text h6>Check Out My</Text>
      </Row>
      <Row justify="center" align="center">
        <Text
          h5
          css={{
            textGradient: "45deg, $pink600 -20%, $purple600 100%",
          }}
          weight="bold"
        >
          Recent Projects
        </Text>
      </Row>
      <Grid.Container gap={2} justify="center" css={{ mt: "50px" }}>
        <Grid xs={12} sm={6} md={4}>
          <Row justify="center" align="center">
            <ProjectCard
              new={false}
              name=""
              gitlink="https://github.com/saadamirpk/saadamirpk"
              livelink="https://saadamirpk.github.io/saadamirpk/"
              desc="My Personal Portfolio and Recent Projects Showcase"
              tags="ReactJS, NextUI"
              img={nextui}
            />
          </Row>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <Row justify="center" align="center">
            <ProjectCard
              new={false}
              name=""
              gitlink="https://github.com"
              livelink="https://linkedin.com"
              desc="Memory Game with Timer, Score History and CSS Design"
              tags="ReactJS, LocalStorage"
              img="https://github.com/saadamirpk/tenzies-react-game/raw/main/src/tenzies-gif.gif"
            />
          </Row>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <Row justify="center" align="center">
            <ProjectCard
              new={false}
              name=""
              gitlink="https://github.com/saadamirpk/space-explore"
              livelink="https://saadamirpk.github.io/space-explore/"
              desc="SpaceX Launches, Starlink Satellites and Rockets from API"
              tags="ReactJS, MUI"
              img="https://github.com/saadamirpk/space-explore/raw/main/src/space-gif.gif"
            />
          </Row>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <Row justify="center" align="center">
            <ProjectCard
              new={false}
              name=""
              gitlink="https://github.com/saadamirpk/MintFunds-react"
              livelink="https://saadamirpk.github.io/MintFunds-react/"
              desc="Add or Remove Financial Transactions with Balance Widget"
              tags="ReactJS, ContextAPI"
              img="https://github.com/saadamirpk/MintFunds-react/raw/main/src/mintfunddemo-gif.gif"
            />
          </Row>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <Row justify="center" align="center">
            <ProjectCard
              new={false}
              name=""
              gitlink="https://github.com/saadamirpk/Suroor_app"
              livelink="https://suroor.com.pk"
              desc="E-Commerce Store with Reselling Options and Admin Panel"
              tags="Android, XML, Java"
              img={suroor}
            />
          </Row>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <Row justify="center" align="center">
            <ProjectCard
              new={false}
              name=""
              gitlink="https://github.com/saadamirpk/suroor-api"
              desc="Manage Students Attendance, Assignments and Class Resources"
              tags="Laravel, PHP, MVC"
              img=""
            />
          </Row>
        </Grid>
      </Grid.Container>
    </section>
  );
}
