import { Router } from 'express';
const router = Router();
const demoAdoptions = []; // In-memory demo only; records reset when server restarts.
// TODO (Mannat): validate input and persist using Adoption.model.js.
router.get('/', (_req, res) => res.json(demoAdoptions));
router.post('/', (req, res) => {
  const request = { id: String(Date.now()), ...req.body, status: 'pending' };
  demoAdoptions.push(request);
  res.status(201).json({ message: 'Demo only: stored in memory', request });
});
export default router;
