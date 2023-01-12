// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { body } = req

  const { name, company, email, phone, message } = body

  // TODO send this contact information to a database

  res.status(200).json({ name, company, email, phone, message })
}
