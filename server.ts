import express from 'express';

const app = express();

/**
 * ❌ VULNERABILITY 1: Missing authentication
 * No auth middleware protecting this route
 */
app.get('/api/users', (req, res) => {
  res.json({
    users: ['alice', 'bob', 'charlie'],
  });
});

/**
 * ❌ VULNERABILITY 2: Missing authentication
 */
app.post('/api/transactions', (req, res) => {
  res.json({ success: true });
});

/**
 * ❌ VULNERABILITY 3: Missing security headers
 */
app.use((req, res, next) => {
  // Missing Content-Security-Policy
  // Missing X-Frame-Options
  next();
});

app.listen(3000, () => {
  console.log('Server running');
});
