import { Router } from 'express';
const router = Router();
const demoBookings = []; // In-memory demo only; records reset when server restarts.
// TODO (Om): validate input and persist bookings with a Mongoose model.
router.get('/', (_req, res) => res.json(demoBookings));
router.post('/', (req, res) => {
  const booking = { id: String(Date.now()), ...req.body, status: 'pending' };
  demoBookings.push(booking);
  res.status(201).json({ message: 'Demo only: stored in memory', booking });
});
export default router;
