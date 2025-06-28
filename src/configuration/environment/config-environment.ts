import { registerAs } from "@nestjs/config";

export default registerAs('config', () => {
  return {
    environment: process.env.ENVIRONMENT,
    port: process.env.NODE_PORT
  };
});