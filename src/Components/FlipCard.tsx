import { Text, Row } from "@nextui-org/react";
import React from "react";
import Project from "../iconComponents/Project";
import Star from "../iconComponents/Star";
import User from "../iconComponents/User";

export default function FlipCard(props: { title: string; desc: any }) {
  const DataDisplay = props.desc.map((data: any) => {
    return (
      <Row
        css={{
          padding: "7px 25px",
        }}
      >
        <Text>
          <Text b>{data.main}</Text>
          <br />
          {data.sub}
        </Text>
      </Row>
    );
  });

  return (
    <>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div
            className="flip-card-front"
            style={{ textAlign: "center", verticalAlign: "middle" }}
          >
            <Row
              justify="center"
              align="center"
              css={{
                height: "350px",
              }}
            >
              <Text h5>{props.title}</Text>
            </Row>
          </div>
          <div className="flip-card-back">{DataDisplay}</div>
        </div>
      </div>
    </>
  );
}
