import mongoose from 'mongoose';

export interface BlockInfo extends mongoose.Document {
	baseFeePerGas: number;
	extraData: string;
	gasLimit: number;
	gasUsed: number;
	hash: string;
	miner: string;
	mixHash: string;
	number: number;
	parentHash: string;
	receiptsRoot: string;
	size: number;
	stateRoot: string;
	timestamp: number;
	transactions: string[];
	transactionsRoot: string;
}

const blockInfoSchema = new mongoose.Schema(
	{
		baseFeePerGas: {
			type: Number,
		},
		extraData: {
			type: String,
		},
		gasLimit: {
			type: Number,
		},
		gasUsed: {
			type: Number,
		},
		hash: {
			type: String,
		},
		miner: {
			type: String,
		},
		mixHash: {
			type: String,
		},
		number: {
			type: Number,
		},
		parentHash: {
			type: String,
		},
		receiptsRoot: {
			type: String,
		},
		size: {
			type: Number,
		},
		stateRoot: {
			String,
		},
		timestamp: {
			type: Number,
		},
		transactions: {
			type: [String],
		},
		transactionsRoot: {
			type: String,
		},
	},
	{
		toObject: {
			virtuals: true,
		},
		toJSON: {
			virtuals: true,
		},
	}
);

export const blockModelSchema = mongoose.model<BlockInfo>('Block', blockInfoSchema);
