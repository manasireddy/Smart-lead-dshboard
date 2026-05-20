import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import leadRoutes from './routes/lead.routes';

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// test route
app.get('/', (_req, res) => {
  res.send('API Running');
});

// debug route
app.post('/test', (req, res) => {
  console.log(req.body);

  res.json({
    body: req.body
  });
});

app.use('/api/auth', authRoutes);
app.use('/api/leads', leadRoutes);

export default app;