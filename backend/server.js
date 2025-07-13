const express = require('express');
const cors = require('cors');
const { Pool } = require('pg'); // подключаем pg

const app = express();
const PORT = 8000;

// подключение к PostgreSQL
const pool = new Pool({
    user: 'muratnasyrov01icloud.com',      // замените на свой macOS username или postgres
    host: 'localhost',
    database: 'coding_conf',
    password: '',          // если пароль пустой — оставьте так
    port: 5432,
});

// разрешаем CORS для фронтенда
app.use(cors());
app.use(express.json());

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    console.log('Получено:', req.body);

    try {
        const result = await pool.query(
            'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
            [name, email, password]
        );
        res.json({ status: 'ok', saved: result.rows[0] });
    } catch (err) {
        console.error('Ошибка при сохранении в БД:', err);
        res.status(500).json({ status: 'error', error: err.message });
    }
});

app.get('/', (req, res) => {
    res.send('Сервер работает');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
