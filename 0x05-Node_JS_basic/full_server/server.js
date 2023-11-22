import express from 'express';
import routes from './routes';

const app = express();

app.use('/', routes);

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

export default app;
