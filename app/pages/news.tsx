import Footer from "../components/Footer";
import Link from "next/link";
import useLiterals from "../hooks/useLiterals";
import useContent from "../hooks/useContent";


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

    const { newsTitle, newItem5Title, newItem5Subtitle, newItem4Title, newItem4Subtitle, newItem3Title, newItem3Subtitle, newItem2Title, newItem2Subtitle, newItem1Title, newItem1Subtitle } = useLiterals(literals)
    const content = useContent()
    return (
        <>
            <main className="bg-gray-200">
                <h1 className="font-bakbakone text-center text-4xl m-4">
                    {newsTitle}
                </h1>




                <div className="flex flex-col items-center gap-10">
                    <Link href="/newsItem">
                        <div className="max-w-sm w-full lg:max-w-full lg:flex">
                            <img className='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden' src='/images/tesab-logo.png'/>
                            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                <h2 className="text-gray-900 font-bold text-xl mb-2">{newItem5Title}</h2>
                                <h3 className="text-gray-700 text-base">{newItem5Subtitle}</h3>
                            </div>
                        </div>
                    </Link>

                    <Link href="/newsItem">
                        <div className="max-w-sm w-full lg:max-w-full lg:flex">
                            <img className='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden' src={content('/whoWeAre.jpg')}/>
                            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                <h2 className="text-gray-900 font-bold text-xl mb-2">{newItem5Title}</h2>
                                <h3 className="text-gray-700 text-base">{newItem5Subtitle}</h3>
                            </div>
                        </div>
                    </Link>

                    <Link href="/newsItem">
                        <div className="max-w-sm w-full lg:max-w-full lg:flex">
                            <img className='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden' src={content('/whoWeAre.jpg')}/>
                            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                                <h2 className="text-gray-900 font-bold text-xl mb-2">{newItem5Title}</h2>
                                <h3 className="text-gray-700 text-base">{newItem5Subtitle}</h3>
                            </div>
                        </div>
                    </Link>

                    <Link href="/newsItem">
                        <div className="max-w-sm w-full lg:max-w-full lg:flex">
                            <img className='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden' src={content('/whoWeAre.jpg')}/>
                            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
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