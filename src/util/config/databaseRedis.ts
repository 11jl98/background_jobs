import Queue from 'bull'
import 'dotenv/config'

const queue = new Queue('GenerateSicca',
  {
    redis: {
      host: `${process.env.REDIS_HOST}`,
      port: parseInt(process.env.REDIS_PORT!),
      password: 'ycGhP5nlbR8tnnMeLFVQDZtECvynpaIb',

      tls: {},
    }
  })
  
  queue.on("failed", (job) => {
    console.log("job falid", job);
  });

  export default queue