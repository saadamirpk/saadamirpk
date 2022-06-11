import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { Star, Project, Home, About, Work, User } from "../iconComponents";

export default function Navbar(props: { active: string; update: any }) {
  return (
    <nav>
      <a
        href="#home"
        onClick={() => props.update("home")}
        className={props.active === "home" ? "active" : ""}
      >
        <Home />
      </a>
      <a
        href="#about"
        onClick={() => props.update("about")}
        className={props.active === "about" ? "active" : ""}
      >
        <About />
      </a>
      <a
        href="#projects"
        onClick={() => props.update("projects")}
        className={props.active === "projects" ? "active" : ""}
      >
        <Project />
      </a>
      <a
        href="#skills"
        onClick={() => props.update("skills")}
        className={props.active === "skills" ? "active" : ""}
      >
        <Star />
      </a>
      <a
        href="#contact"
        onClick={() => props.update("contact")}
        className={props.active === "contact" ? "active" : ""}
      >
        <User />
      </a>
    </nav>
  );
}
