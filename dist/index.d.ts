// Generated by dts-bundle-generator v9.5.1

import { Strategy as CustomStrategy } from 'passport-custom';

export interface Options {
	publicKey: string | Function;
	privateKey: string | Function;
	findBy?: string;
	from?: "body" | "headers";
}
export declare class Strategy extends CustomStrategy {
	constructor(options: Options);
}

export {};
