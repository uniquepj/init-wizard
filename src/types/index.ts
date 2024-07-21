interface Question {
  type: "select" | "confirm";
  name: string;
  message: string;
  choices?: { name: string; value: string }[];
  default?: boolean;
}

interface Answers {
  projectType: "react" | "node";
  typescript: boolean;
  eslint: boolean;
  prettier: boolean;
  husky: boolean;
  tailwindcss: boolean;
}

export { Question, Answers };
