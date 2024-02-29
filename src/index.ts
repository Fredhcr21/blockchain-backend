import app from './app';
import {Config} from './config';
import { logger } from './core';

app.listen({ port: Config.app.port }, (): void => {
	logger.info(
		`🚀 ${Config.app.name} up and running in ${Config.app.env} @ http://localhost:${Config.app.port}`
	);
});
