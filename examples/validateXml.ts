// examples/validate_xml.ts
import { ValidationError } from "../src/mod.ts";
import { CaballoClient } from "../src/mod.ts";
import {
  dirname,
  fromFileUrl,
  join,
} from "https://deno.land/std@0.224.0/path/mod.ts";

// Get current directory
const currentDir = dirname(fromFileUrl(import.meta.url));
// Construct absolute path to XML file
const xmlPath = join(currentDir, "files", "invoice.xml");

console.log(xmlPath);

const client = new CaballoClient({
  baseUrl: "https://caballo.app",
});

// Now use the absolute path
const xmlContent = await Deno.readFile(xmlPath);
try {
  const result = await client.validateXml(xmlContent);
  console.log("Validation result:", result);
} catch (error) {
  if (error instanceof ValidationError) {
    console.error("Validation failed:", error);
  }
}
