import { Avatar, Text, Grid } from "@nextui-org/react";
import React from "react";

export default function Testimonial(props: {
  img: string;
  body: string;
  name: string;
  desig: string;
}) {
  return (
    <Grid.Container gap={2}>
      <Grid xs={3} justify="center">
        <Avatar
          src={props.img}
          css={{ size: "$20" }}
          color="gradient"
          bordered
          zoomed
          squared
        />
      </Grid>
      <Grid xs={9} justify="center">
        <Text small>
          {props.body}
          <br />
          <br />
          <Text h5>{props.name}</Text>
          <br />
          {props.desig}
        </Text>
      </Grid>
    </Grid.Container>
  );
}
