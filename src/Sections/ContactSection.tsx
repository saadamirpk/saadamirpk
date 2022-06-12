import { Button, Grid, Row, Text, Input, Textarea } from "@nextui-org/react";
import React, { useState } from "react";
import InfoCard from "../Components/InfoCard";
import confetti from "canvas-confetti";
import SocialCard from "../Components/SocialCard";

export default function ContactSection(props: any) {
  const handleConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 360,
      origin: {
        x: Math.random(),
        // since they fall down, start a bit higher than random
        y: Math.random() - 0.2,
      },
    });
  };

  return (
    <section id="contact">
      <Row justify="center" align="center" css={{ mt: "80px" }}>
        <Text h6>Get In Touch</Text>
      </Row>
      <Row justify="center" align="center">
        <Text
          h5
          css={{
            textGradient: "45deg, $pink600 -20%, $purple600 100%",
          }}
          weight="bold"
        >
          Contact Me
        </Text>
      </Row>
      <Grid.Container gap={2} css={{ mt: "50px" }}>
        <Grid xs={12} sm={6}>
          <Grid.Container gap={2} alignItems="flex-start">
            <Grid xs={6}>
              <InfoCard
                ic={1}
                subtitle={"Send me an Email"}
                title="Contact Form"
              />
            </Grid>
            <Grid xs={6}>
              <InfoCard
                ic={2}
                subtitle="Find me on LinkedIn"
                title="/in/saad-amir"
              />
            </Grid>
            <Grid xs={6}>
              <InfoCard
                ic={3}
                subtitle="Find me on GitHub"
                title="@saadamirpk"
              />
            </Grid>
            <Grid xs={6}>
              <InfoCard
                ic={3}
                subtitle="Find me on GitHub"
                title="@saadamirpk"
              />
            </Grid>
          </Grid.Container>
        </Grid>
        <Grid xs={12} sm={6}>
          <Grid.Container gap={2} css={{ height: "max-content" }}>
            <Grid xs={12} sm={6}>
              <Row align="flex-start" css={{ mt: "20px" }}>
                <Input
                  underlined
                  labelPlaceholder="Name"
                  color="secondary"
                  fullWidth={true}
                  type={"text"}
                />
              </Row>
            </Grid>
            <Grid xs={12} sm={6}>
              <Row align="flex-start" css={{ mt: "20px" }}>
                <Input
                  underlined
                  labelPlaceholder="Email"
                  fullWidth={true}
                  color="secondary"
                  type={"email"}
                />
              </Row>
            </Grid>
            <Grid xs={12} sm={12}>
              <Row align="flex-start" css={{ mt: "20px" }}>
                <Textarea
                  underlined
                  color="secondary"
                  fullWidth={true}
                  labelPlaceholder="Message"
                />
              </Row>
            </Grid>
            <Grid xs={12} sm={12}>
              <Row align="flex-start" css={{ mt: "20px" }}>
                <Button color={"gradient"} size="sm" auto>
                  Submit
                </Button>
              </Row>
            </Grid>
          </Grid.Container>
        </Grid>
      </Grid.Container>
    </section>
  );
}
