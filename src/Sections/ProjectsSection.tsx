import { Row, Text, Grid } from "@nextui-org/react";
import React from "react";
import ProjectCard from "../Components/ProjectCard";
import nextui from "../Images/nextui.jpeg";
import suroor from "../Images/suroor.gif";
import cart from "../Images/cartss.png";

export default function ProjectsSection(props: any) {
  return (
    <section id="projects" style={{ height: "max-content" }}>
      <div className="padding-sides">
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
                new={true}
                name=""
                gitlink="https://github.com/saadamirpk/react-cart"
                livelink="https://www.linkedin.com/posts/saad-amir_react-job-jobs-activity-6950782881774346240-VtzE?utm_source=linkedin_share&utm_medium=member_desktop_web"
                desc="React Shopping Cart with GraphQL Integration"
                tags="ReactJS, Redux, GraphQL, API"
                img={cart}
              />
            </Row>
          </Grid>
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
                gitlink="https://github.com/saadamirpk/tenzies-react-game"
                livelink="https://saadamirpk.github.io/tenzies-react-game/"
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
                desc="E-Commerce Store with Reselling Options and Admin Panel"
                tags="Android, XML, Java"
                img={suroor}
              />
            </Row>
          </Grid>
        </Grid.Container>
      </div>
    </section>
  );
}
