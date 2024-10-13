function processMessage(text) {
  return { type: 'text', text: text };
}

module.exports = { processMessage };
