# Caballo Client

Type-safe Deno/Node.js client for validating e-Invoices against EU standards using the Caballo API.

## Table of Contents
- [Description](#description)
  - [Key Features](#key-features)
- [Installation](#installation)
  - [Node.js](#nodejs)
- [Usage](#usage)
- [API Reference](#api-reference)
  - [CaballoClient](#caballoclient)
    - [Configuration](#configuration)
    - [Methods](#methods)
    - [Types](#types)
- [Examples](#examples)
- [Development](#development)
- [License](#license)

## Description

Caballo Client is a modern TypeScript library for validating electronic invoices (e-Invoices) against European Union standards. It provides a simple and type-safe interface to interact with the Caballo validation API, supporting both XML and PDF e-Invoice formats.

### Key Features
- Full TypeScript support with comprehensive types
- Zero dependencies, using standard Web APIs
- Support for both Deno and Node.js (ESM, Node 18+)
- Built-in validation for Factur-X/ZUGFeRD formats
- Efficient file handling with support for Uint8Array, Blob, and File inputs
- Clear error handling with detailed validation results

## Installation

### Node.js
```bash
npm install caballo-client
```

## Usage
```ts
import { CaballoClient } from "caballo-client";

// Initialize client
const client = new CaballoClient({
  baseUrl: "https://api.example.com",
  timeout: 5000, // optional
});

// Validate XML
const xmlContent = await Deno.readFile("invoice.xml");
try {
  const result = await client.validateXml(xmlContent);
  console.log("XML Validation result:", result);
} catch (error) {
  console.error("Validation failed:", error.message);
}

// Validate PDF
const pdfContent = await Deno.readFile("invoice.pdf");
try {
  const result = await client.validatePdf(pdfContent);
  console.log("PDF Validation result:", result);
} catch (error) {
  console.error("Validation failed:", error.message);
}
```

## API Reference

### Caballo Client

#### Configuration
```ts
interface ClientConfig {
  baseUrl: string;    // Required: Base URL of the Caballo API
  timeout?: number;   // Optional: Timeout in milliseconds (default: 30000)
}
```

#### Methods

`validateXml(content: FileContent): Promise<ValidationResult>`

Validates an XML e-Invoice file.

`validatePdf(content: FileContent): Promise<ValidationResult>`

Validates a PDF e-Invoice file including its embedded XML and metadata.

#### Types

```ts
type FileContent = Uint8Array | Blob | File;

interface ValidationResult {
  valid: boolean;
  conformanceLevel?: string;
  structureErrors?: string[];
  pdfErrors?: string[];
}
```

## Examples
See the [examples](./examples/) directory for more usage examples.

## Development
```bash
# Run tests
deno task test

# Format code
deno task fmt

# Run linter
deno task lint

# Build npm package
deno task build:npm
```

## License
[MIT License](./LICENSE)

