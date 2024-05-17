import { Strategy as CustomStrategy } from "passport-custom";

interface Options {
    publicKey: string | Function
    privateKey: string | Function
    findBy?: string
    from?: 'body' | 'headers'
}

export class Strategy extends CustomStrategy {
    constructor(options: Options) {
        super(verify(options));
    }
}

function verify(options: Options) {
    options.findBy = options.findBy ?? "publicKey"
    options.from = options.from ?? 'headers'

    return (req: any, done: Function) => {
        let publicKey;
        if (options.from === "body") {
            publicKey = req.body.publicKey!;
        } else {
            publicKey = req.headers.get(options.findBy)
        }

        return publicKey
    }
}