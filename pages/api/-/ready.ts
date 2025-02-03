import type {NextApiRequest, NextApiResponse} from "next";

export default function ready(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        res.status(200).send({})
    }
}