import { GoogleGenerativeAI } from "@google/genai";
import { chromium } from "playwright";
import { MCP } from "@playwright/mcp";
import fs from "fs/promises";

// 1. Initialize Google AI Client.
const ai = new GoogleGenerativeAI({});

// Register custom tools BEFORE using MCP dispatch
// This allows Gemini to write Playwright test files.
async function registerCustomTools(mcp) {
  await mcp.registerTool("writeFile", async ({ path, content }) => {
    await fs.writeFile(path, content, "utf8");
    return { success: true, message: `File saved to ${path}` };
  });
}

async function runAutomationAgent(goal) {
  // 2. Launch browser and attach MCP
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  const mcp = new MCP(page);

  // Register our file-writing tool
  await registerCustomTools(mcp);

  console.log(`Agent Goal: ${goal}`);

  while (true) {
    // 3. Capture browser context
    const pageState = await mcp.context();

    // 4. Send state and goal to Gemini Pro
    const response = await ai.models.generateContent({
      model: "gemini-2.5-computer-use-preview",
      contents: [pageState, { role: "user", parts: [{ text: goal }] }],
      config: {
        tools: [
          { computerUse: { environment: "browser" } },
          {
            writeFile: {
              description: "Write Playwright test files",
              properties: {
                path: { type: "string" },
                content: { type: "string" }
              }
            }
          }
        ]
      }
    });

    const functionCall = response.functionCalls?.[0];

    if (functionCall) {
      console.log(`Executing tool/action: ${functionCall.name}`);

      // 5. Execute Gemini’s requested action
      const result = await mcp.dispatch(functionCall);

      if (result?.success) console.log(result.message || result.success);

      if (result.done) {
        console.log("Goal achieved OR file generated.");
        break;
      }
    } else {
      console.log("Gemini stopped giving actions. Task is complete or unclear.");
      break;
    }
  }

  await browser.close();
}

// Example goal:
// (You can replace this with any natural language instruction)
runAutomationAgent(
  "Generate a Playwright test that opens google.com, searches for 'AI', and save it as tests/google-search.spec.ts"
);
