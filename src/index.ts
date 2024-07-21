#!/usr/bin/env node

import { confirm, select } from "@inquirer/prompts";

import { Question } from "./types";
import { initProject } from "./init-project";

const questions: Question[] = [
  {
    type: "select",
    name: "projectType",
    message: "What type of project are you initializing?",
    choices: [
      {
        name: "Reactjs",
        value: "react",
      },
      {
        name: "NodeJS",
        value: "node",
      },
    ],
  },
  {
    type: "confirm",
    name: "typescript",
    message: "Do you want to add TypeScript?",
    default: true,
  },
  {
    type: "confirm",
    name: "eslint",
    message: "Do you want to add ESLint?",
    default: true,
  },
  {
    type: "confirm",
    name: "prettier",
    message: "Do you want to add Prettier?",
    default: true,
  },
  {
    type: "confirm",
    name: "husky",
    message: "Do you want to add Husky for Git hooks?",
    default: true,
  },
  {
    type: "confirm",
    name: "tailwindcss",
    message: "Do you want to add TailwindCSS?",
    default: false,
  },
];

const promptUser = async () => {
  const answers: any = {};

  for (const question of questions) {
    const {
      type,
      name,
      message,
      choices = [],
      default: defaultValue,
    } = question;

    if (type === "confirm") {
      const res = await confirm({
        message,
        default: defaultValue,
      });

      answers[name] = res;
    } else if (type === "select") {
      const res = await select({
        message,
        choices,
        default: defaultValue,
      });
      answers[name] = res;
    }
  }

  initProject(answers);
};

promptUser();
