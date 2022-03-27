import { IGameHeaders } from "../../../types";

export function parseHeaders(_headers: object) {
	const headers: IGameHeaders = { ..._headers };
	return headers;
}
