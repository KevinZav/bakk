import { registerAs } from "@nestjs/config";

export default registerAs('config', () => {
  return {
    environment: process.env.ENVIRONMENT,
    port: process.env.NODE_PORT,
    jwt: {
      secretKey: process.env.JWT_PRIVATE_KEY,
      publicKey: process.env.JWT_PUBLIC_KEY,
      expireTime: process.env.JWT_EXPIRE_TIME
    }
  };
});