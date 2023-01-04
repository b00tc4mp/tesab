export default function sendEmail(from: string, subject: string, body: string): Promise<void> {
    return fetch('/api/contact', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ from, subject, body })
    })
        .then(res => {
            if (res.ok) {
                return
            }

            return res.json()
                .then(res => {
                    const { error } = res

                    throw new Error(error)
                })
        })

}