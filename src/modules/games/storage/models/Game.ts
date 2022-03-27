import mongoose from "mongoose";

// mongoose game model
const gameSchema = new mongoose.Schema({
	headers: {
		type: Object,
		required: true
	},
	moves: {
		type: String,
		required: true
	},
	pgn: {
		type: String,
		required: false
	},
	fenList: {
		type: Array,
		required: false
	}
});

export const Game = mongoose.model("Game", gameSchema);