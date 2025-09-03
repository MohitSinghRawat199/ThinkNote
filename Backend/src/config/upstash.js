import {Ratelimit} from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import dotenv from "dotenv"
dotenv.config();

const ratelimit =new Ratelimit({
    redis:Redis.fromEnv(),
    limiter:Ratelimit.slidingWindow(3,"10 s"),
})
// console.log("🔌 Upstash Redis client initialized:", process.env.UPSTASH_REDIS_REST_URL);


export default ratelimit;