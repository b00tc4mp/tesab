import Footer from "../components/Footer";
import Link from "next/link";
import prepareLiterals from "../helpers/prepareLiterals";
import prepareContent from "../helpers/prepareContent";
import Head from 'next/head'


const literals = {
    pt: {
        newsTitle: '',
        newItem5Title: '',
        newItem5Subtitle: '',
        newItem4Title: '',
        newItem4Subtitle: '',
        newItem3Title: '',
        newItem3Subtitle: '',
        newItem2Title: '',
        newItem2Subtitle: '',
        newItem1Title: '',
        newItem1Subtitle: '',
    },
    en: {
        newsTitle: '',
        newItem5Title: '',
        newItem5Subtitle: '',
        newItem4Title: '',
        newItem4Subtitle: '',
        newItem3Title: '',
        newItem3Subtitle: '',
        newItem2Title: '',
        newItem2Subtitle: '',
        newItem1Title: '',
        newItem1Subtitle: '',

    },
    es: {
        newsTitle: 'NOVEDADES',
        newItem5Title: 'Voluptate velit aliqua',
        newItem5Subtitle: 'Aute ad eu culpa incididunt ex officia sint nulla velit commodo laborum incididunt consequat.',
        newItem4Title: 'Voluptate velit aliqua',
        newItem4Subtitle: 'Aute ad eu culpa incididunt ex officia sint nulla velit commodo laborum incididunt consequat.',
        newItem3Title: 'Voluptate velit aliqua',
        newItem3Subtitle: 'Aute ad eu culpa incididunt ex officia sint nulla velit commodo laborum incididunt consequat.',
        newItem2Title: 'Voluptate velit aliqua',
        newItem2Subtitle: 'Aute ad eu culpa incididunt ex officia sint nulla velit commodo laborum incididunt consequat.',
        newItem1Title: 'Voluptate velit aliqua',
        newItem1Subtitle: 'Aute ad eu culpa incididunt ex officia sint nulla velit commodo laborum incididunt consequat.',
    }
}

export default function SpareParts() {

    const { newsTitle, newItem5Title, newItem5Subtitle, newItem4Title, newItem4Subtitle, newItem3Title, newItem3Subtitle, newItem2Title, newItem2Subtitle, newItem1Title, newItem1Subtitle } = prepareLiterals(literals)
    const content = prepareContent()
    return (
        <>

            <Head>
                <title>{newsTitle} - Tesab Spain</title>
            </Head>
            <main className="bg-repeat py-12" style={{ backgroundImage: 'url(/images/piramide2.png)' }}>
                <h1 className="font-bakbakone text-center text-4xl m-4 ">
                    {newsTitle}
                </h1>


                <div className="flex flex-col gap-10 p-4 sm:grid sm:grid-cols-2">
                    <Link href="/newsItem">
                        <div className="max-w-sm w-full shadow-lg lg:max-w-full flex flex-col xl:flex-row">
                            <img className='h-auto w-screen text-center rounded-t sm:h-48 lg:h-64 lg:w-auto lg:rounded-t-none lg:rounded-l' src={content('/whoWeAre.jpg')} />
                            <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col leading-normal">
                                <h2 className="text-gray-900 font-bold text-xl mb-2">{newItem5Title}</h2>
                                <h3 className="text-gray-700 text-base">{newItem5Subtitle}</h3>
                            </div>
                        </div>
                    </Link>

                    <Link href="/newsItem">
                        <div className="max-w-sm w-full shadow-lg lg:max-w-full flex flex-col xl:flex-row">
                            <img className='h-auto w-screen text-center rounded-t sm:h-48 lg:h-64 lg:w-auto lg:rounded-t-none lg:rounded-l' src={content('/whoWeAre.jpg')} />
                            <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col leading-normal">
                                <h2 className="text-gray-900 font-bold text-xl mb-2">{newItem5Title}</h2>
                                <h3 className="text-gray-700 text-base">{newItem5Subtitle}</h3>
                            </div>
                        </div>
                    </Link>

                    <Link href="/newsItem">
                        <div className="max-w-sm w-full shadow-lg lg:max-w-full flex flex-col xl:flex-row">
                            <img className='h-auto w-screen text-center rounded-t sm:h-48 lg:h-64 lg:w-auto lg:rounded-t-none lg:rounded-l' src={content('/whoWeAre.jpg')} />
                            <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col leading-normal">
                                <h2 className="text-gray-900 font-bold text-xl mb-2">{newItem5Title}</h2>
                                <h3 className="text-gray-700 text-base">{newItem5Subtitle}</h3>
                            </div>
                        </div>
                    </Link>

                    <Link href="/newsItem">
                        <div className="max-w-sm w-full shadow-lg lg:max-w-full flex flex-col xl:flex-row">
                            <img className='h-auto w-screen text-center rounded-t sm:h-48 lg:h-64 lg:w-auto lg:rounded-t-none lg:rounded-l' src={content('/whoWeAre.jpg')} />
                            <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col leading-normal">
                                <h2 className="text-gray-900 font-bold text-xl mb-2">{newItem5Title}</h2>
                                <h3 className="text-gray-700 text-base">{newItem5Subtitle}</h3>
                            </div>
                        </div>
                    </Link>

                    <Link href="/newsItem">
                        <div className="max-w-sm w-full shadow-lg lg:max-w-full flex flex-col xl:flex-row">
                            <img className='h-auto w-screen text-center rounded-t sm:h-48 lg:h-64 lg:w-auto lg:rounded-t-none lg:rounded-l' src={content('/whoWeAre.jpg')} />
                            <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col leading-normal">
                                <h2 className="text-gray-900 font-bold text-xl mb-2">{newItem5Title}</h2>
                                <h3 className="text-gray-700 text-base">{newItem5Subtitle}</h3>
                            </div>
                        </div>
                    </Link>

                    <Link href="/newsItem">
                        <div className="max-w-sm w-full shadow-lg lg:max-w-full flex flex-col xl:flex-row">
                            <img className='h-auto w-screen text-center rounded-t sm:h-48 lg:h-64 lg:w-auto lg:rounded-t-none lg:rounded-l' src={content('/whoWeAre.jpg')} />
                            <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col leading-normal">
                                <h2 className="text-gray-900 font-bold text-xl mb-2">{newItem5Title}</h2>
                                <h3 className="text-gray-700 text-base">{newItem5Subtitle}</h3>
                            </div>
                        </div>
                    </Link>

                </div>

            </main>

            <Footer />
        </>
    );
}