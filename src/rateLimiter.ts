import { MAX_REQUEST, STATUS_CODE, WINDOW_SIZE } from "./constants";

const rateLimitMap = new Map();

export const rateLimiter = (req: any, res: any, next: any) => {
  const ip = req.ip;
  const now = Date.now();

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, []);
  }

  const timestamps = rateLimitMap
    .get(ip)
    .filter((ts: any) => now - ts < WINDOW_SIZE);
  timestamps.push(now);

  if (timestamps.length > MAX_REQUEST) {
    return res
      .status(STATUS_CODE.RATE_LIMIT_ERROR)
      .send("You are exceeded the limit.. Please try agin later!");
  }

  rateLimitMap.set(ip, timestamps);

  next();
};
