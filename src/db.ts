import mongoose from "mongoose";

const DB_USER = process.env.DB_USER;
const DB_PWD = process.env.DB_PWD;
const DB_HOST = process.env.DB_HOST;

export async function startDb() {
	return mongoose
		.connect(
			// TODO: Fix mongodb authentication
			// `mongodb://${DB_USER}:${DB_PWD}@mongodb:27017/rates-db`,
			`mongodb://${DB_HOST}:27017/chessdb`,
		);
}
