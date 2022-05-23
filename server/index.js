import App from './App.js';
import { PORT } from './config.js';
import { connectDB } from './db.js';

connectDB();

App.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});


