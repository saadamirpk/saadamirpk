import React from "react";
import { Card, Col, Row, Button, Text } from "@nextui-org/react";

export default function ProjectCard(props: {
  name: string;
  livelink?: string;
  gitlink: string;
  desc: string;
  tags: string;
  img: string;
  new: boolean;
}) {
  return (
    <Card css={{ w: "100%", h: "400px", bgColor: "$purple600" }}>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
            {props.new && "New"}
          </Text>
          <Text h3 color="black">
            {props.name}
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src="https://nextui.org/images/card-example-6.jpeg"
          width="100%"
          height="100%"
          objectFit="cover"
          alt="Card example background"
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#ffffff66",
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Text color="#000" size={12} b>
              {props.tags}
            </Text>
            <Text color="#000" size={12}>
              {props.desc}
            </Text>
          </Col>
          <Col>
            <Row justify="flex-end">
              {props.livelink != null ? (
                <Button
                  flat
                  auto
                  rounded
                  color="secondary"
                  css={{ marginRight: "5px" }}
                >
                  <Text
                    css={{ color: "inherit" }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    Demo
                  </Text>
                </Button>
              ) : (
                <></>
              )}
              <a href={props.gitlink} target="_blank">
                <Button flat auto rounded color="secondary">
                  <Text
                    css={{ color: "inherit" }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    GitHub
                  </Text>
                </Button>
              </a>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}
