import { Card, Text, Image } from "@nextui-org/react";
import React from "react";
import Project from "../iconComponents/Project";
import Star from "../iconComponents/Star";
import User from "../iconComponents/User";

export default function InfoCard(props: {
  title: string;
  subtitle: string;
  ic: number;
}) {
  return (
    <Card
      isHoverable
      variant="bordered"
      css={{
        mw: "250px",
        margin: "auto",
        backgroundColor: "$purple600",
      }}
    >
      <Card.Body css={{ ta: "center" }}>
        <>
          {props.ic == 1 && (
            <Star height={38} width={38} style={{ margin: "auto" }} />
          )}
          {props.ic == 2 && (
            <User height={38} width={38} style={{ margin: "auto" }} />
          )}
          {props.ic == 3 && (
            <Project height={38} width={38} style={{ margin: "auto" }} />
          )}
          <Text h5>{props.title}</Text>
          <Text small css={{ mt: "5px" }}>
            {props.subtitle}
          </Text>
        </>
      </Card.Body>
    </Card>
  );
}
