function processMessage(text: string): { type: string; text: string } {
  return { type: "text", text: text };
}

export { processMessage };
