# init-wizard (Project Initializer CLI)

#### Description
Project Initializer CLI is a command-line tool designed to help developers quickly set up and configure new or existing React or Node.js projects. It provides an interactive prompt that guides users through the process of adding TypeScript, ESLint, Prettier, Husky, and TailwindCSS to their projects. The CLI ensures that all necessary configurations and dependencies are installed and set up correctly, making it easier for developers to maintain consistent code quality and style across their projects.

#### Features
- **Interactive Prompts:** Guides users through the setup process with easy-to-follow questions.
- **TypeScript Integration:** Adds TypeScript support to your project.
- **ESLint Configuration:** Sets up ESLint for code linting and quality assurance.
- **Prettier Setup:** Integrates Prettier for consistent code formatting.
- **Husky & Lint-Staged:** Configures Husky and Lint-Staged for pre-commit hooks to ensure code quality before commits.
- **TailwindCSS Installation:** Optionally adds TailwindCSS for utility-first CSS framework support.

**NOTE:** init-wizard assumes you are currently using `npm` as package manager. We are adding compatibility for `pnpm`, `yarn` etc in later versions soon.

#### Usage

To initialize a new or existing project, navigate to your project directory and run:

```bash
npx init-wizard@latest
```

#### Example

```bash
$ npx init-wizard@latest
? What type of project are you initializing? (Use arrow keys)
❯ React
  Node.js
? Do you want to add TypeScript? (Y/n)
? Do you want to add ESLint? (Y/n)
? Do you want to add Prettier? (Y/n)
? Do you want to add Husky for Git hooks? (Y/n)
? Do you want to add TailwindCSS? (y/N)
```

#### Future Plans:
- **Docker Initializer:** Automated Docker setup for Next.js, React.js, Vite, and Node.js projects.
- **Base Test Cases:** Integration of base test cases for popular test libraries.
- **Package Rewrites:** Handles package rewrites if configuration files already exist.
- **Conventional Commits:** Integration on converntional commits in the project.

#### License
This project is licensed under the MIT License.