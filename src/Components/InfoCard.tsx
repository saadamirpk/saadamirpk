import { Card, Text, Image } from "@nextui-org/react";
import React from "react";
import Project from "../iconComponents/Project";
import Star from "../iconComponents/Star";
import User from "../iconComponents/User";
import Work from "../iconComponents/Work";

export default function InfoCard(props: {
  subtitle: string;
  title: string;
  ic: number;
  link?: string;
}) {
  function handleClick() {
    if (props.link) {
      var anchor = document.createElement("a");
      anchor.href = props.link;
      anchor.target = "_blank";
      anchor.click();
    }
  }

  return (
    <Card
      isHoverable
      variant="bordered"
      onClick={handleClick}
      className={props.link ? "pointer" : ""}
      css={{ mw: "250px", backgroundColor: "$purple600", margin: "auto" }}
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
          {props.ic == 4 && (
            <Work height={38} width={38} style={{ margin: "auto" }} />
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
