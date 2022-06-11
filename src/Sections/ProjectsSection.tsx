import { Row, Text, Grid, Button } from "@nextui-org/react";
import React from "react";
import ProjectCard from "../Components/ProjectCard";

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
              new={true}
              name="Personal Portfolio"
              gitlink="https://github.com"
              livelink="https://linkedin.com"
              desc="My Personal Portfolio and Recent Projects Showcase"
              tags="ReactJS, NextUI"
              img=""
            />
          </Row>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <Row justify="center" align="center">
            <ProjectCard
              new={true}
              name="Tenzies"
              gitlink="https://github.com"
              livelink="https://linkedin.com"
              desc="Memory Game with Timer, Score History and CSS Design"
              tags="ReactJS, LocalStorage"
              img=""
            />
          </Row>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <Row justify="center" align="center">
            <ProjectCard
              new={true}
              name="Space Explore"
              gitlink="https://github.com"
              livelink="https://linkedin.com"
              desc="SpaceX Launches, Starlink Satellites and Rockets from API"
              tags="ReactJS, MUI"
              img=""
            />
          </Row>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <Row justify="center" align="center">
            <ProjectCard
              new={true}
              name="MintFunds"
              gitlink="https://github.com"
              livelink="https://linkedin.com"
              desc="Add or Remove Financial Transactions with Balance Widget"
              tags="ReactJS, ContextAPI"
              img=""
            />
          </Row>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <Row justify="center" align="center">
            <ProjectCard
              new={false}
              name="Suroor Reseller"
              gitlink="https://github.com"
              livelink="https://suroor.com.pk"
              desc="E-Commerce Store with Reselling Options and Admin Panel"
              tags="Android, XML, Java"
              img=""
            />
          </Row>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <Row justify="center" align="center">
            <ProjectCard
              new={false}
              name="Learning Management System"
              gitlink="https://github.com"
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
