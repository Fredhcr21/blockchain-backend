import { Router } from 'express';
import { block, blockNumber } from '../controllers/getBlock.controller';

export const getBlockRoute = Router().get('/', block).get('/:id', blockNumber);
