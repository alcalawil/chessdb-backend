import mongoose from "mongoose";

// mongoose game model
const gameSchema = new mongoose.Schema({
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
	},
	/************ HEADERS ************/
	White: {
		type: String,
		required: false
	},
	Black: {
		type: String,
		required: false
	},
	Result: {
		type: String,
		required: false
	},
	Event: {
		type: String,
		required: false
	},
	EventCountry: {
		type: String,
		required: false
	},
	Site: {
		type: String,
		required: false
	},
	Date: {
		type: String,
		required: false
	},
	Round: {
		type: String,
		required: false
	},
	WhiteElo: {
		type: String,
		required: false
	},
	BlackElo: {
		type: String,
		required: false
	},
	ECO: {
		type: String,
		required: false
	},
	WhiteTitle: {
		type: String,
		required: false
	},
	BlackTitle: {
		type: String,
		required: false
	},
	WhiteFideId: {
		type: String,
		required: false
	},
	BlackFideId: {
		type: String,
		required: false
	}
});

export const Game = mongoose.model("Game", gameSchema);