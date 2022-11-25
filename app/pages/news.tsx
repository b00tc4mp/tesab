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
            <main>
                <h1 className="font-bakbak-one text-center text-3xl m-4">
                    {newsTitle}
                </h1>
                <div className="grid grid-cols-2">
                    <Link href="/newsItem">
                        <div className="bg-yellow-200 flex flex-col gap-2 my-4 pb-4 border-solid border-yellow-100 border-4">
                            <img src={content('/equipment/accesories/dustCannon.png')}/>
                            <h2 className="font-bold text-xl">{newItem5Title}</h2>
                            <h3 className="truncate">{newItem5Subtitle}</h3>
                        </div>
                    </Link>

                    <Link href="/newsItem">
                        <div className="bg-yellow-200 flex flex-col gap-2 my-4 pb-4 border-solid border-yellow-100 border-4">
                            <img src={content('/news/meeting.png')}/>
                            <h2 className="font-bold text-xl">{newItem4Title}</h2>
                            <h3 className="truncate">{newItem4Subtitle}</h3>
                        </div>
                    </Link>

                    <Link href="/newsItem">
                        <div className="bg-yellow-200 flex flex-col gap-2 my-4 pb-4 border-solid border-yellow-100 border-8">
                            <img src={content('/equipment/scalpers/scalper.png')} />
                            <h2 className="font-bold text-xl">{newItem3Title}</h2>
                            <h3 className="truncate">{newItem3Subtitle}</h3>
                        </div>
                    </Link>

                    <Link href="/newsItem">
                        <div className="bg-yellow-200 flex flex-col gap-2 my-4 pb-4">
                            <img src={content('/equipment/accesories/dustCannon.png')}/>
                            <h2 className="font-bold text-xl">{newItem2Title}</h2>
                            <h3 className="truncate">{newItem2Subtitle}</h3>
                        </div>
                    </Link>

                    <Link href="/newsItem">
                        <div className="bg-yellow-200 flex flex-col gap-2 my-4 pb-4">
                            <img src={content('/equipment/scalpers/scalper.png')} />
                            <h2 className="font-bold text-xl">{newItem1Title}</h2>
                            <h3 className="truncate">{newItem1Subtitle}</h3>
                        </div>
                    </Link>
                </div>
            </main>

            <Footer />
        </>
    );
}