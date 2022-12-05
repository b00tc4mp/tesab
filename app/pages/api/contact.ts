// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sendMail from './sendMail'

type Input = {
  from: string,
  subject: string,
  body: string
}

type Data = {
  error: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { from, subject, body }: Input = req.body

  sendMail(from, subject, body)
    .then(() => res.status(200).send())
    .catch(error => res.status(500).json({ error: error.message}))
}