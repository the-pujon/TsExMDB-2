import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(config.port,() => {
      /* eslint-disable no-console */
      console.log(`app is listening on port ${config.port}`);
    });
  } catch (err) {
    /* eslint-disable no-console */
    console.log(err);
  }
}

main();
