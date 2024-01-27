declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // ENVIRONMENT
      NODE_ENV: string;
      DEBUG?: string;

      // SERVER
      HOST: string;
      PORT: string;

      // Anti throttle
      ANTI_THROTTLE_MAX_REQUEST?: string;
      ANTI_THROTTLE_INTERVAL?: string;

      // Database
      DB_HOST: string;
      DB_PORT?: string;
      DB_USERNAME?: string;
      DB_PASSWORD?: string;
      DB_DATABASE: string;
    }
  }
}

export {};
