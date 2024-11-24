import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

async function main() {
  try {
    await mongoose.connect(config.uri as string);

    app.listen(config.port, () => {
      // eslint-disable-next-line no-console
      console.log(`http://localhost:${config.port}`);
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);  
  }
}

main();
