import Web3 from 'web3';
import { BlockInfo, blockModelSchema } from '../models/getBlock.model';

const web3 = new Web3('https://mainnet.infura.io/v3/' + '20ad5e39822e4cb0ad072bbee7bd25b0');

export const getBlock = async (): Promise<BlockInfo> => {
	const lastBlock = await web3.eth.getBlock('latest');
	const transaction = lastBlock.transactions.map(String).slice(0, 10);
	const block = {
		miner: lastBlock.miner,
		extraData: lastBlock.extraData,
		hash: String(lastBlock.hash),
		mixHash: String(lastBlock.mixHash),
		parentHash: lastBlock.parentHash,
		receiptsRoot: lastBlock.receiptsRoot,
		stateRoot: lastBlock.stateRoot,
		timestamp: Number(lastBlock.timestamp),
		number: Number(lastBlock.number),
		baseFeePerGas: Number(lastBlock.baseFeePerGas),
		gasLimit: Number(lastBlock.gasLimit),
		gasUsed: Number(lastBlock.gasUsed),
		size: Number(lastBlock.size),
		transactionsRoot: lastBlock.transactionsRoot,
		transactions: transaction,
	};
	const saveBlock = await blockModelSchema.create(block);
	return saveBlock;
};

export const getBlockByNumber = async (number = ''): Promise<BlockInfo> => {
	const blockNumber = await web3.eth.getBlock(number);

	if (blockNumber) {
		const existingBlock = await blockModelSchema.findOne({ number: Number(blockNumber.number) });

		if (existingBlock) {
			return existingBlock;
		}
		const transaction = blockNumber.transactions.map(String).slice(0, 10);
		const block = {
			miner: blockNumber.miner,
			extraData: blockNumber.extraData,
			hash: String(blockNumber.hash),
			mixHash: String(blockNumber.mixHash),
			parentHash: blockNumber.parentHash,
			receiptsRoot: blockNumber.receiptsRoot,
			stateRoot: blockNumber.stateRoot,
			timestamp: Number(blockNumber.timestamp),
			number: Number(blockNumber.number),
			baseFeePerGas: Number(blockNumber.baseFeePerGas),
			gasLimit: Number(blockNumber.gasLimit),
			gasUsed: Number(blockNumber.gasUsed),
			size: Number(blockNumber.size),
			transactionsRoot: blockNumber.transactionsRoot,
			transactions: transaction,
		};
		const saveBlockNumber = await blockModelSchema.create(block);
		return saveBlockNumber;
	} else {
		throw new Error('error');
	}
};
