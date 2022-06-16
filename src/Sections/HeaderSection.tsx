import { Button, Card, Container, Row, Text } from "@nextui-org/react";
import React from "react";
import saad from "../Images/saadimg.png";

export default function HeaderSection(props: any) {
  return (
    <section id="home">
      <Container className="padding-sides" style={{ height: "100vh" }}>
        <Row justify="center" align="center" css={{ mt: "100px" }}>
          <Text h1 css={{ mr: "10px" }}>
            I'm
          </Text>
          <Text
            h1
            css={{
              textGradient: "45deg, $pink600 -20%, $purple600 100%",
            }}
            weight="bold"
          >
            Saad Amir
          </Text>
        </Row>
        <Row justify="center" align="center">
          <Text h4>Creative Developer</Text>
        </Row>
        <Row justify="center" align="center">
          <Text h6 css={{ ta: "center", mw: "500px" }}>
            I make visual and interactive digital experiences using web-related
            technologies to develop highly engaging/storytelling websites and
            web apps.
          </Text>
        </Row>
        <Row justify="center" align="center" css={{ mt: "20px" }}>
          <a href="/saad-resume.pdf" download>
            <Button
              ghost
              color={"gradient"}
              css={{ mr: "20px" }}
              size="sm"
              auto
            >
              Download CV
            </Button>
          </a>
          <a href="#contact">
            <Button color={"gradient"} size="sm" auto>
              Let's Talk
            </Button>
          </a>
        </Row>
        <Row justify="center" align="center" css={{ mt: "30px" }}>
          <div className="profile-backdrop"></div>
          <img className="profile-img" src={saad} alt="profile image" />
        </Row>
      </Container>
    </section>
  );
}
