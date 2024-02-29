import { NextFunction, Request, Response } from 'express';
import { getBlock, getBlockByNumber } from '../services/getBlock.service';
import { handleError } from '../../core';
import logger from '../../core/logger';
import * as HTTPStatus from 'http-status-codes';

export const block = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		logger.debug(`Get /last-block : ${JSON.stringify(req.body)}`);
		const result = await getBlock();
		logger.debug(`Get /last-block response: ${JSON.stringify(result)}`);
		res.status(HTTPStatus.OK).json(result);
		return next();
	} catch (err) {
		return next(handleError(err));
	}
};

export const blockNumber = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const id = req.params.id;
		logger.debug(`Get /block/:id : ${JSON.stringify(req.params.id)}`);
		const result = await getBlockByNumber(id);
		logger.debug(`GET /block/:id response: ${JSON.stringify(result)}`);
		res.status(HTTPStatus.OK).json(result);
		return next();
	} catch (err) {
		return next(handleError(err));
	}
};
