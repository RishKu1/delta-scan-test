import express from "express";

const router = express.Router();

// ❌ NO AUTH MIDDLEWARE
router.get("/users", (req, res) => {
  res.json({ users: ["alice", "bob"] });
});

// ❌ Wildcard CORS
router.post("/users", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json({ ok: true });
});

export default router;
