// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiHandler } from 'next'
import sgMail from '../../lib/sendgrid'

const handler: NextApiHandler = async (req, res) => {
  const { email, description, name } = JSON.parse(req.body)

  try {
    await sgMail.send({
      replyTo: email,
      from: 'alex.hinds141@gmail.com',
      to: 'alex.hinds141@gmail.com',
      text: `Hi Alex,\n\nI'm ${name}(${email}) enquiring about ${description}.\n\nThis email was autogenerated via Halyard API.`,
      subject: 'Halyard Enquiry',
    })
    console.log('Email sent')
  } catch (error) {
    console.warn(error)
  }

  res.status(200).json(req.body)
}

export default handler
