/**
 * Interface for application configuration settings
 *
 * @interface Config
 */
interface Config {
    debug: boolean;
    env: string;
    logLevel: string;
    name: string;
    port: number;
    requestLimit: string;
    version: string;
  }
  
  // default settings are for development environment
  const config: Config = {
    debug: Boolean(process.env.DEBUG) || true,
    env: process.env.NODE_ENV || 'development',
    logLevel: process.env.LOG_LEVEL || 'debug',
    name: process.env.API_NAME || 'API Server',
    port: Number(process.env.PORT || 8080),
    requestLimit: process.env.REQUEST_LIMIT || '100kb',
    version: process.env.API_VERSION || '1.0.0',
  };
  
  export default config;