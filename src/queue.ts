import "dotenv/config";
import  queue  from "./util/config/databaseRedis";
import generateSicca  from "./jobs/generateSicca";


queue.process(generateSicca.handle);
