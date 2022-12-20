import Footer from "../components/Footer";
import prepareLiterals from "../helpers/prepareLiterals";
import prepareContent from "../helpers/prepareContent";



const literals = {
    pt: {
        newsItemTitle: '',
        newsItemSubtitle: '',
        newsItemText:'',
    },
    en: {
        newsItemTitle: '',
        newsItemSubtitle: '',
        newsItemText:'',
    },
    es: {
        newsItemTitle: 'Reprehenderit consectetur pariatur nulla occaecat eiusmod.',
        newsItemSubtitle: 'Labore aute eu non elit cupidatat aliqua dolor.',
        newsItemText: 'Ipsum et voluptate eiusmod anim labore reprehenderit pariatur ex sint et. Anim deserunt anim exercitation enim id aliqua ullamco. Deserunt in nisi quis incididunt anim. Aliquip ea commodo laboris aliquip nulla occaecat proident amet consequat aliqua exercitation enim cupidatat.Et consequat nostrud non ea veniam ut labore. Eiusmod tempor ipsum commodo ea quis irure fugiat incididunt. Sunt elit deserunt est velit aute.Ullamco culpa in duis eiusmod reprehenderit aute ea. Ipsum adipisicing irure ex labore amet anim incididunt elit magna consectetur aute voluptate. Ullamco eiusmod nisi culpa ea. Ex consequat culpa reprehenderit commodo qui id consectetur.'
    }
}

export default function NewsItem() {

    const { newsItemTitle, newsItemSubtitle, newsItemText } = prepareLiterals(literals)
    const content = prepareContent()
    return (

        <>
            <main className="mb-6 flex flex-col gap-4">
                <h1 className="text-xl font-bold px-2">{newsItemTitle}</h1>
                <h2 className="text-lg px-2">{newsItemSubtitle}</h2>
                <img src={content('/equipment/recycling/tr100e.png')}/>
                <p className="text-justify px-3">{newsItemText}</p>

            </main>
            <Footer />
        </>
    );
}