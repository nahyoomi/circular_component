# Circular Component

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Node Version](https://img.shields.io/badge/node->=14-blue.svg)](https://nodejs.org/)

Circular Component is a web application developed in React and TypeScript that allows managing loan requests. The project features a modular structure and reusable components, centralized error handling, and robust input data validation.

## Table of Contents

- [Features](#features)
- [Implemented Technologies](#implemented-technologies)
- [Installation and Local Execution](#installation-and-local-execution)
- [Development Documentation](#development-documentation)
- [Demo](#demo)

## Features

- **Reusable Components:** Modular structure to facilitate scalability and maintainability.
- **Robust Validations:** Type and data format validations in forms using React Hook Form.
- **Integrated Error Management:** Centralized error handling with specialized components.
- **Responsive Interface:** Styled with Tailwind CSS for adaptability on mobile and desktop devices.

## Implemented Technologies

- **React** – Main library for building the user interface.
- **TypeScript** – For static typing and development robustness.
- **React Router DOM** – Route management within the application.
- **React Hook Form** – Form handling and validation.
- **Tailwind CSS** – Utility-first CSS framework for modern design.
- **Axios** – For making HTTP requests.

## Installation and Local Execution

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/circular_component.git
   cd circular_component
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**

   ```bash
   npm start
   # or
   yarn start
   ```

4. **Access the application:**

   Open your browser and visit [http://localhost:5173](http://localhost:5173)

### Available Scripts

- **start** – Starts the development server.
- **build** – Generates a production build.
- **lint** – Checks syntax and code style.

## Development Documentation

### Project Structure

```
src/
├── components/    # Reusable components like LoanForm, ErrorMessage, LoadingSkeleton, etc.
├── pages/         # Main pages of the application (e.g., LoanPage.tsx).
├── services/      # API connection logic and data handling (e.g., getUserData, submitLoanRequest).
├── types/         # Type and interface definitions for TypeScript.
├── index.css      # Global styles (including Tailwind).
└── App.css        # Application-specific styles.
```

### Error Handling and Response Formats

#### HTTP Services
- Service functions (`getUserData`, `submitLoanRequest`) make HTTP requests and manage response formatting.

#### Error Management
- Errors are captured in `catch` blocks and formatted based on the `message` field of the response.
- For example, if a **400** error occurs, the message is extracted and sent to the `ErrorMessage` or `FailureComponent`.

#### Error Components
- Specialized components are used, such as:
  - `ErrorMessage`
  - `FailureComponent`
  - `MandatoryId`

These inform the user about specific errors.

### Data Type Validations

#### React Hook Form
**React Hook Form** is used to validate all form data. Each field has custom validations, for example:

- **Phone:** Must start with `34` and be followed by valid numbers.
- **Loan Amount:** Must be between `10` and `1000`.
- **Loan Date:** Ensures the date is in the future using the `min` attribute.
- **Loan Weeks:** Must be between `1` and `20`.

#### TypeScript
- Provides static typing to ensure data consistency throughout the application.

## Demo

You can view a live demo here:  
[Application Demo](#) *()*
