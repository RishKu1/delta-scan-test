import express from 'express';

const app = express();

/**
 * ✅ Fake auth middleware
 */
function requireAuth(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
}

/**
 * ✅ FIXED: authentication added
 */
app.get('/api/users', requireAuth, (req, res) => {
  res.json({
    users: ['alice', 'bob', 'charlie'],
  });
});

/**
 * ❌ STILL VULNERABLE: no auth
 */
app.post('/api/transactions', (req, res) => {
  res.json({ success: true });
});

/**
 * ✅ FIXED: security headers added
 */
app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'"
  );
  res.setHeader('X-Frame-Options', 'DENY');
  next();
});

app.listen(3000, () => {
  console.log('Server running');
});
