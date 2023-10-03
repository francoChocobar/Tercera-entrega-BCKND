import dotenv from "dotenv";
dotenv.config();
export const config = {
  server: {
    port: process.env.PORT,
    secretSession: process.env.SECRET_SESSION,
  },
  mongo: {
    url: process.env.MONGO_URL,
  },
  github: {
    clientId: " Iv1.09f619d1652dcd25",
    clientSecret: "d574503591e089d4746c8ec8ed01d88916ca4496",
    callbackUrl: "http://localhost:8080/api/sessions/github-callback",
  },
};
