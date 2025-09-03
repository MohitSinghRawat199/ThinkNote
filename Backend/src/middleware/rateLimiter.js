import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    // 🚨 Force a fixed key for local testing
    const identifier = "test-user";

    const result = await ratelimit.limit(identifier);
 
    console.log(
      `Rate limit -> success: ${result.success}, remaining: ${result.remaining}, limit: ${result.limit}`
    );

    if (!result.success) {
      return res.status(429).json({ message: "Too many requests 🚫" });
    }

    next();
  } catch (err) {
    console.error("Rate limit error:", err);
    next(err);
  }
};

export default rateLimiter;
