import { Router } from 'express';

const router = Router();

router.get('/health', async (req, res) => {
    try {
        // Simulamos una operación asíncrona si a futuro necesitás chequear DB
        res.status(200).json({ status: 'ok' });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
});

export default router;
