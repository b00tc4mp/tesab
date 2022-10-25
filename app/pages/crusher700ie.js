import Head from 'next/head'
import Header from '../components/Header'
import ContactForm from '../components/ContactForm'

export default function crusher700ie() {
    return (
        <div>
            <Head>
                <title>Tesab Spain SL</title>
                <meta name="description" content="TODO set tesab description here" />
                <link rel="icon" href="https://www.tesab.com/wp-content/uploads/2020/03/favicon-16.png" type="image/png" sizes="16x16" />
                <link rel="icon" href="https://www.tesab.com/wp-content/uploads/2020/03/favicon-32.png" type="image/png" sizes="32x32" />
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
            </Head>

            <Header />

            <h1 className='font-bold text-center text-3xl m-4'>700ie</h1>
            <div>
            <p>Ea culpa id nulla duis amet aliquip Lorem occaecat.</p>
            <img className='' src="images/equipment/screeners/ts3600.jpeg"></img>
            </div>
            <img className='' src="images/equipment/crushers/700i.jpeg"></img>
            <img src=''></img>

            <ContactForm />


        </div>
    )
}