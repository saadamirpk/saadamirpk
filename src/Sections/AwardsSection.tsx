import { Row, Text, Grid, Button } from "@nextui-org/react";
import React from "react";
import FlipCard from "../Components/FlipCard";
import Testimonial from "../Components/Testimonial";
import sohaib from "../Images/soh.jpg";
import ghulam from "../Images/gmustafa.jpg";
import muzamil from "../Images/muz.jpeg";

export default function AwardsSection(props: any) {
  return (
    <section id="skills">
      <Row justify="center" align="center" css={{ mt: "80px" }}>
        <Text h6>Some More Things</Text>
      </Row>
      <Row justify="center" align="center">
        <Text
          h5
          css={{
            textGradient: "45deg, $pink600 -20%, $purple600 100%",
          }}
          weight="bold"
        >
          I'd Like To Share
        </Text>
      </Row>
      <Grid.Container gap={2} justify="center" css={{ mt: "50px" }}>
        <Grid xs={12} sm={6} md={4}>
          <FlipCard
            title="Skills and Tools"
            desc={[
              { main: "Fundamentals", sub: "HTML, CSS, JS, PHP, MYSQL" },
              {
                main: "FrontEnd",
                sub: "ReactJS, Redux, GraphQL, Animations, NextUI, MUI",
              },
              { main: "Design", sub: "Figma, Gimp, Canva" },
              {
                main: "Marketing",
                sub: "Speed Optimization, SEO, Google Analytics",
              },
              { main: "Backend", sub: "Express, Laravel, Firebase" },
            ]}
          />
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <FlipCard
            title="Hobbies"
            desc={[
              { main: "Sports", sub: "Table Tennis, Billiards, Karate" },
              {
                main: "Charity",
                sub: "Rizq Foundation Volunteer",
              },
              {
                main: "Learning",
                sub: "Advance Animations, Backend, Blockchain",
              },
              { main: "Travel", sub: "35+ Cities in 6 Countries" },
              { main: "YouTube", sub: "Sharing My Skills & Ideas" },
            ]}
          />
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <FlipCard
            title="Achievements"
            desc={[
              {
                main: "Bachelors",
                sub: "Bsc. Computer Science from Bahria University",
              },
              {
                main: "IELTS",
                sub: "Scored 8.0 Bands in April 2022",
              },
              {
                main: "Karate",
                sub: "Dan Black 1 Belt - Australia Budokan Int.",
              },
              {
                main: "Digital Marketing",
                sub: "Fundamental Certification from Google Digital Garage",
              },
              {
                main: "Volunteer of the Month",
                sub: "Distribution of Meals for Hunger Alleviation",
              },
            ]}
          />
        </Grid>
      </Grid.Container>
      <Grid.Container gap={2} justify="center">
        <Grid xs={12} sm={6} md={4}>
          <Testimonial
            name="Dr. Ghulam Mustafa"
            img={ghulam}
            desig="PhD CS, UK. Assistant Professor, Bahria University"
            body="Saad comes across as an intelligent, conscientious, and hardworking individual who is a thoughtful self-starter with a pleasing personality. He will make meaningful contribution to the computing knowledge with his keen desire for intellectual growth."
          />
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <Testimonial
            name="Mr. Sohaib Ahsan"
            img={sohaib}
            desig="Founder & CEO Forenax Technologies"
            body="Saad is a fantastic person to work with, and is not only a multi-skilled and insightful colleague, but also an inspiring strategist. Very good person. Great employee with a very strong problem solving skills. Saad is an asset to any company."
          />
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <Testimonial
            name="M. Muzamil Rashid"
            img={muzamil}
            desig="Freelance Developer"
            body="Saad is a valuable team player and well accepted by his colleagues. He has an exceptional time management skill. He can work independently too. He is well organized, always on time and a reliable person."
          />
        </Grid>
      </Grid.Container>
    </section>
  );
}
