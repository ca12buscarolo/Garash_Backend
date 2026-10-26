import 'dotenv/config';
import app from './src/app.js';

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`🚀 Garash Backend corriendo en http://localhost:${PORT}`);
            console.log(`🟢 Health check disponible en http://localhost:${PORT}/api/health`);
        });
    } catch (error) {
        console.error('❌ Error al levantar el servidor:', error);
        process.exit(1);
    }
};

startServer();
