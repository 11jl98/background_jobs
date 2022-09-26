import Queue from "bull";
import "dotenv/config";

const queue = new Queue("GenerateSicca", {
  redis: {
    host: `${process.env.REDIS_HOST}`,
    port: parseInt(process.env.REDIS_PORT!),
  },
});

queue.on("failed", (job) => {
  console.log("job falid", job.failedReason, job.stacktrace);
});

export default queue;
