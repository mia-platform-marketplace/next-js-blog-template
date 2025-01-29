import type {NextApiRequest, NextApiResponse} from "next";

export default function checkup(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        res.status(200).send({})
    }
}