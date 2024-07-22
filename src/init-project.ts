import path from "path";
import { execSync } from "child_process";
import fs from "fs";

import { Answers } from "./types";

const initProject = (answers: Answers) => {
  const { projectType, typescript, eslint, prettier, husky, tailwindcss } =
    answers;

  const packageJsonPath = path.resolve(process.cwd(), "package.json");
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

  if (typescript) {
    execSync("npm install typescript && npm install -D @types/node", {
      stdio: "inherit",
    });
    execSync("npx tsc --init", { stdio: "inherit" });
  }

  if (eslint) {
    execSync(
      "npm install -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin",
      { stdio: "inherit" }
    );
    fs.writeFileSync(
      ".eslintrc.json",
      JSON.stringify(
        {
          parser: "@typescript-eslint/parser",
          plugins: ["@typescript-eslint"],
          extends: [
            "eslint:recommended",
            "plugin:@typescript-eslint/recommended",
          ],
        },
        null,
        2
      )
    );
  }

  if (prettier) {
    execSync(
      "npm install -D prettier eslint-config-prettier eslint-plugin-prettier",
      { stdio: "inherit" }
    );
    fs.writeFileSync(
      ".prettierrc",
      JSON.stringify(
        {
          singleQuote: true,
          trailingComma: "all",
        },
        null,
        2
      )
    );
    fs.writeFileSync(
      ".eslintrc.json",
      JSON.stringify(
        {
          extends: ["plugin:prettier/recommended"],
        },
        null,
        2
      ),
      { flag: "a" }
    );
  }

  if (husky) {
    execSync("npm install -D husky lint-staged", { stdio: "inherit" });
    execSync("npx husky init", { stdio: "inherit" });
    fs.writeFileSync(path.join(".husky", "pre-commit"), "npm run lint-staged", {
      mode: 0o0755,
    });
    fs.writeFileSync(
      "lint-staged.config.js",
      'module.exports = {\n  "*.{js,ts,tsx}": "eslint --cache --fix"\n};'
    );

    // Add lint-staged script to package.json
    packageJson.scripts = {
      ...packageJson.scripts,
      "lint-staged": "lint-staged",
    };

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  }

  if (tailwindcss && projectType === "react") {
    execSync("npm install -D tailwindcss postcss autoprefixer", {
      stdio: "inherit",
    });
    execSync("npx tailwindcss init -p", { stdio: "inherit" });
    fs.writeFileSync(
      "tailwind.config.js",
      `module.exports = {
        purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
        darkMode: false,
        theme: {
          extend: {}
        },
        variants: {
          extend: {}
        },
        plugins: []
      };`
    );
  }

  console.log("Project initialized successfully!");
};

export { initProject };
