import { Button, Grid, Row, Text } from "@nextui-org/react";
import React, { useState } from "react";
import InfoCard from "../Components/InfoCard";
import confetti from "canvas-confetti";

export default function AboutSection(props: any) {
  const [clickCount, setClickCount] = useState(0);

  const handleConfetti = () => {
    if (clickCount < 15) {
      confetti({
        particleCount: 150,
        spread: 360,
        origin: {
          x: Math.random(),
          // since they fall down, start a bit higher than random
          y: Math.random() - 0.2,
        },
      });
    } else {
      //Display Modal with Social Links
    }
    setClickCount((prev) => {
      return prev + 1;
    });
  };

  return (
    <section id="about">
      <Row justify="center" align="center" css={{ mt: "80px" }}>
        <Text h6>Get to Know</Text>
      </Row>
      <Row justify="center" align="center">
        <Text
          h5
          css={{
            textGradient: "45deg, $pink600 -20%, $purple600 100%",
          }}
          weight="bold"
        >
          About Me
        </Text>
      </Row>
      <Grid.Container gap={2} justify="center" css={{ mt: "50px" }}>
        <Grid xs={12} sm={6}>
          <Row justify="center" align="center" css={{ position: "relative" }}>
            <img
              className="about-img"
              src="http://github.com/saadamirpk.pngg"
              alt=""
            />
            <div className="about-img-backdrop" />
          </Row>
        </Grid>
        <Grid xs={12} sm={6} css={{ height: "fit-content" }}>
          <div>
            <Grid.Container
              gap={2}
              justify="center"
              css={{ height: "fit-content" }}
            >
              <Grid xs={12} sm={4}>
                <InfoCard ic={1} subtitle="2+ Years" title="Experience" />
              </Grid>
              <Grid xs={12} sm={4}>
                <InfoCard ic={2} subtitle="8+ Worldwide" title="Clients" />
              </Grid>
              <Grid xs={12} sm={4}>
                <InfoCard ic={3} subtitle="23+ Completed" title="Projects" />
              </Grid>
            </Grid.Container>
            <Text size={14} css={{ ta: "justify", mt: "12px" }}>
              Hi! I'm Saad, a Creative Developer based in Pakistan. I enjoy
              creating beautiful visual experiences and interactive web apps.
              The excitement of bringing design to life gets me going. I wish to
              develop distinct, eccentric UI components which the world of
              frontend design could benefit and inspire from.
            </Text>
            <Text size={14} css={{ mt: "12px" }}>
              Technologies I've been working with recently:
            </Text>
            <Grid.Container
              gap={2}
              justify="center"
              css={{ height: "fit-content" }}
            >
              <Grid xs={12} sm={4} css={{ p: "0" }}>
                <ul>
                  <li>ReactJS</li>
                </ul>
              </Grid>
              <Grid xs={12} sm={4} css={{ p: "0" }}>
                <ul>
                  <li>NextUI</li>
                </ul>
              </Grid>
              <Grid xs={12} sm={4} css={{ p: "0" }}>
                <ul>
                  <li>GraphQL</li>
                </ul>
              </Grid>
              <Grid xs={0} sm={4} css={{ p: "0" }}>
                <ul>
                  <li>MaterialUI</li>
                </ul>
              </Grid>
              <Grid xs={0} sm={4} css={{ p: "0" }}>
                <ul>
                  <li>Figma</li>
                </ul>
              </Grid>
              <Grid xs={0} sm={4} css={{ p: "0" }}>
                <ul>
                  <li>Gimp</li>
                </ul>
              </Grid>
            </Grid.Container>
            <Button
              color={"gradient"}
              size="sm"
              css={{ mt: "20px", ml: "20px" }}
              auto
              onClick={handleConfetti}
            >
              {clickCount <= 5
                ? "Click Here For a Surprise"
                : 15 - clickCount + " Clicks Away"}
            </Button>
          </div>
        </Grid>
      </Grid.Container>
    </section>
  );
}
