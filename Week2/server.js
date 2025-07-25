const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// GET endpoints
app.get('/add', (req, res) => {
  const { a, b } = req.query;
  if (!a || !b) return res.status(400).send("Missing parameters");
  res.send(`Sum: ${parseFloat(a) + parseFloat(b)}`);
});

app.get('/subtract', (req, res) => {
  const { a, b } = req.query;
  if (!a || !b) return res.status(400).send("Missing parameters");
  res.send(`Difference: ${parseFloat(a) - parseFloat(b)}`);
});

app.get('/multiply', (req, res) => {
  const { a, b } = req.query;
  if (!a || !b) return res.status(400).send("Missing parameters");
  res.send(`Product: ${parseFloat(a) * parseFloat(b)}`);
});

app.get('/divide', (req, res) => {
  const { a, b } = req.query;
  const numB = parseFloat(b);
  if (!a || !b || numB === 0) return res.status(400).send("Invalid input or division by zero");
  res.send(`Quotient: ${parseFloat(a) / numB}`);
});

// POST endpoint
app.post('/calculate', (req, res) => {
  const { a, b, operation } = req.body;
  const numA = parseFloat(a);
  const numB = parseFloat(b);
  if (isNaN(numA) || isNaN(numB)) return res.status(400).json({ error: "Invalid numbers" });

  let result;
  switch (operation) {
    case 'add': result = numA + numB; break;
    case 'subtract': result = numA - numB; break;
    case 'multiply': result = numA * numB; break;
    case 'divide':
      if (numB === 0) return res.status(400).json({ error: "Cannot divide by zero" });
      result = numA / numB;
      break;
    default: return res.status(400).json({ error: "Invalid operation" });
  }

  res.json({ result });
});

// Start server with informative messages
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`API endpoints available at:`);
  console.log(`- GET /add?a=num1&b=num2`);
  console.log(`- GET /subtract?a=num1&b=num2`);
  console.log(`- GET /multiply?a=num1&b=num2`);
  console.log(`- GET /divide?a=num1&b=num2`);
  console.log(`- POST /calculate (with JSON body)`);
});
