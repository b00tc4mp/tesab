import mailer from 'nodemailer'

const transporter = mailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    }
})

function sendEmail(from, subject, body) {
    return new Promise((resolve, reject) => {
        const mailOptions = {
            from,
            to: 'a.altamirano@tesabspain.es',
            subject,
            text: body
        }

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) return reject(error)

            resolve()
        })
    })
}

export default sendEmail