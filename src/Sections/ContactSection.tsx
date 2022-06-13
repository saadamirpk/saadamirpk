import { Grid, Row, Text } from "@nextui-org/react";
import React, { useRef, useState } from "react";
import InfoCard from "../Components/InfoCard";
import ContactForm from "../Components/ContactForm";

export default function ContactSection(props: any) {
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
          <ContactForm />
        </Grid>
      </Grid.Container>
    </section>
  );
}
