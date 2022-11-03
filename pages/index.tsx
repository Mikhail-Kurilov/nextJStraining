import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

export default function Home(initialData: any) {
  const [formInputs, setFormInputs] = useState({});
  const [searchTerm, setSearchTerm] = useState("Movies");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
      setSearchResults(initialData.IMDb.d)
  }, [initialData])

  const handleInputs = (event: any) => {
    let {name, value} = event.target
    setFormInputs({ ...(formInputs as any), [name]: value });
  }


  const search = async (event: any) => {
    event.preventDefault()
    let IMDb = await fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${formInputs.searchTerm}`)
    IMDb = await IMDb.json()
    setSearchResults(IMDb.d)
    setSearchTerm(formInputs.searchTerm)
  }

  return (
    <>
      <div className="container">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="/styles.css" />
        </Head>

        <h1>Search App</h1>

        <form onSubmit={search}>
          <input
            name="searchTerm"
            onChange={handleInputs}
            type="text"
            required
          />
          <button>Search</button>
        </form>

        <h1>Search results for: {searchTerm}</h1>

        {/* <p>Share this search with others:
        
      <Link
            href="/search/[pid]"
            as={`/search/${searchTerm}`}>
              <a> 
                {`http://localhost:3000/search/${searchTerm}`}
              </a>
      </Link>
     
        </p> */}

        <div className="search-results-grid">
          {searchResults.map((each: any) => {
            return (
              <div key={each.id}>
                <h3>{each.l}</h3>

                <img src={each.i?.imageUrl} alt={each.l} />
              </div>
            );
          })}      
        </div>
      </div>
      <Footer />
    </>
  );
}

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4db9825c19msh3e011ef2764ba10p1c7c1cjsnc6113b75ba5e",
    "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
  },
};

export async function getStaticProps() {
  let IMDb = await fetch(
    "https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr",
    options
  );
  IMDb = await IMDb.json();
  return { props: { IMDb: IMDb } };
}
