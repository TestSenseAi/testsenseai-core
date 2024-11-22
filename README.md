# TestSenseAi

TestSenseAi is an automated testing framework that integrates End-to-End (E2E) testing, API testing, and visual testing with AI capabilities. Built with Node.js and TypeScript, it combines the developer-friendly orientation of Cypress with the performance and efficiency of Playwright. The framework leverages OpenAI’s ChatGPT assistant to provide AI-driven features such as intelligent test generation, self-healing selectors, and natural language processing.

## Table of Contents

- [TestSenseAi](#testsenseai)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Project Structure](#project-structure)
  - [Usage](#usage)
    - [Generating Test Cases](#generating-test-cases)
    - [Self-Healing Selectors](#self-healing-selectors)
    - [Natural Language Processing](#natural-language-processing)
  - [Roadmap](#roadmap)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)
  - [Acknowledgments](#acknowledgments)
  - [Notes](#notes)

## Features

- **AI-Driven Test Generation**: Generate test cases from natural language descriptions using OpenAI’s GPT-4.
- **Self-Healing Selectors**: Automatically fix broken selectors when the UI changes.
- **Natural Language Processing**: Convert plain language test descriptions into executable test scripts.
- **High Performance**: Combines the efficiency of Playwright with an intuitive API inspired by Cypress.
- **Modular Architecture**: Designed for scalability and ease of maintenance.
- **TypeScript Support**: Provides type safety and enhanced code maintainability.

## Getting Started

### Prerequisites

- Node.js version 14.x or higher
- npm or yarn package manager
- OpenAI API Key with access to the GPT-4 beta

## Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/yourusername/testsenseai-core.git
cd testsenseai-core
npm install
```

## Configuration

1. Set Up Environment Variables

   Create a .env file in the root directory and add your OpenAI API key:

   ```text
   OPENAI_API_KEY=your-openai-api-key
   OPENAI_API_URL=https://api.openai.com/v1
   USE_OPENAI_BETA=true
   ```

2. Install Playwright Browsers

```sh
npx playwright install
```

## Project Structure

```text
testsenseai-core/
├── src/
│ ├── ai/
│ │ ├── providers/
│ │ │ ├── aiProvider.ts
│ │ │ ├── openaiProvider.ts
│ │ │ └── index.ts
│ │ ├── services/
│ │ │ ├── testGenerator.ts
│ │ │ ├── selectorHealer.ts
│ │ │ └── naturalLanguageProcessor.ts
│ │ └── index.ts
│ ├── runner/
│ │ ├── core/
│ │ ├── commands/
│ │ ├── assertions/
│ │ ├── reporters/
│ │ └── utils/
│ ├── config/
│ │ └── config.ts
│ ├── utils/
│ │ ├── retry.ts
│ │ └── logger.ts
│ ├── cli/
│ │ ├── commands/
│ │ └── index.ts
│ └── index.ts
├── tests/
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## Usage

### Generating Test Cases

Use the AI-powered test generator to create test cases from natural language descriptions.

Example:

```typescript
import { testGenerator } from 'testsenseai-core';

async function generateTests() {
  const testCases = await testGenerator.generateTestCases(
    'User logs in and views the dashboard',
  );
  console.log(testCases);
}

generateTests();
```

### Self-Healing Selectors

Automatically heal broken selectors when elements in the UI change.

Example:

```typescript
import { selectorHealer } from 'testsenseai-core';

async function healSelector() {
  const domStructure = '<html>...your DOM here...</html>';
  const brokenSelector = '#old-button-id';
  const newSelector = await selectorHealer.healSelector(
    domStructure,
    brokenSelector,
  );
  console.log(`Suggested new selector: ${newSelector}`);
}

healSelector();
```

### Natural Language Processing

Convert plain language test descriptions into executable test scripts.

Example:

```typescript
import { naturalLanguageProcessor } from 'testsenseai-core';

async function convertToScript() {
  const description =
    'Test that the user can successfully reset their password.';
  const testScript =
    await naturalLanguageProcessor.convertToTestScript(description);
  console.log(testScript);
}

convertToScript();
```

## Roadmap

- CLI Enhancements
  • Interactive mode for conversational test creation.
  • Custom commands and aliases.
  • Web Dashboard
  • Real-time monitoring of test execution.
  • Analytics and reporting features.
  • Plugin Architecture
  • SDK for third-party plugin development.
  • Official plugins for integrations with CI/CD tools.
  • Expanded AI Features
  • Scenario-based test suite generation.
  • AI-assisted debugging and error analysis.
  • IDE Integration
  • Extensions for popular IDEs like Visual Studio Code.
  • IntelliSense support for improved developer experience.

## Contributing

Contributions are welcome! Please read the CONTRIBUTING.md file for guidelines on how to get involved.

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please open an issue in the repository or contact us at <support@testsenseai.com>.

## Acknowledgments

- Thanks to the OpenAI team for providing access to the GPT-4 beta.
  • Inspired by the capabilities of Cypress and Playwright.

## Notes

- Current Progress: Established the core integration with OpenAI’s API, implemented key AI services, and structured the project for scalability and future enhancements.
- Technologies Used: Node.js, TypeScript, Playwright, OpenAI API (GPT-4 beta).

Feel free to explore the codebase and provide feedback. Together, we can make automated testing smarter and more efficient with the power of AI!
