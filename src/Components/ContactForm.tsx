import React, { MutableRefObject, useRef, useState } from "react";
import { Button, Grid, Input, Row, Textarea } from "@nextui-org/react";
import confetti from "canvas-confetti";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [subjectErr, setSubjectErr] = useState(false);
  const [msgErr, setMsgErr] = useState(false);
  const [submit, setSubmit] = useState(false);

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

  function handleSubmit() {
    if (name == "") {
      setNameErr(true);
    }
    if (subject == "") {
      setSubjectErr(true);
    }
    if (msg == "") {
      setMsgErr(true);
    }
    if (name != "" && subject != "" && msg != "") {
      setNameErr(false);
      setSubjectErr(false);
      setMsgErr(false);
      setSubmit(true);
      handleConfetti();
      window.location.href = `mailto:saadamir.m@gmail.com?subject=${subject}&body=${
        msg + " by " + name
      }`;
    }
  }

  return (
    <Grid.Container gap={2} css={{ height: "max-content" }}>
      <Grid xs={12} sm={6}>
        <Row align="flex-start" css={{ mt: "20px" }}>
          <Input
            underlined
            labelPlaceholder="Name"
            color="secondary"
            fullWidth={true}
            required
            type={"text"}
            helperText={nameErr ? "Enter Your Name" : ""}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setNameErr(false);
            }}
          />
        </Row>
      </Grid>
      <Grid xs={12} sm={6}>
        <Row align="flex-start" css={{ mt: "20px" }}>
          <Input
            underlined
            labelPlaceholder="Subject"
            fullWidth={true}
            color="secondary"
            type={"text"}
            required
            value={subject}
            helperText={subjectErr ? "Enter Email Subject" : ""}
            onChange={(e) => {
              setSubject(e.target.value);
              setSubjectErr(false);
            }}
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
            helperText={msgErr ? "Enter Your Message" : ""}
            value={msg}
            required
            onChange={(e) => {
              setMsg(e.target.value);
              setMsgErr(false);
            }}
          />
        </Row>
      </Grid>
      <Grid xs={12} sm={12}>
        <Row align="flex-start" css={{ mt: "20px" }}>
          <Button
            color={"gradient"}
            size="sm"
            auto
            disabled={submit ? true : false}
            onClick={handleSubmit}
          >
            {submit ? "Submitted" : "Submit"}
          </Button>
        </Row>
      </Grid>
    </Grid.Container>
  );
}
