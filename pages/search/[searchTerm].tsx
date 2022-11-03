import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Footer from '../../components/Footer'

export default function Search (initialData: any){
    const router = useRouter()
    return(
        <>
        {/* <div className="container">
            <Head>
                <title>Search</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="/styles.css"/>
            </Head>
            <p>Go <Link href="/"><a>home</a></Link></p>
            <h1>Search results for: {router.query.searchTerm}</h1>

            <div className="giphy-search-results-grid">
                {initialData.giphys.map((each, index) => {
                    return(
                        <div key={index}>
                        <h3>{each.title}</h3>
                        <img src={each.images.original.url} alt={each.title}/>
                        </div>
                    )
                })}
            </div>
        </div>
        <Footer /> */}
        </>
    )
}

// export async function getServerSideProps(context: any) {
//   const searchTerm = context.query.searchTerm
//   let IMDb = await fetch(
//     "https://imdb8.p.rapidapi.com/auto-complete?q=${searchTerm}",
//     options
//   );
//   IMDb = await IMDb.json();
//   return { props: { IMDb: IMDb } }; 
// }