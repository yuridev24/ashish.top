"use client";

import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";
import CustomSearchBox from "./CustomSearchBox";
import CustomHits from "./CustomHits";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID as string,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY as string
);

export default function Search() {
  return (
    <>
      <InstantSearch searchClient={searchClient} indexName="portfolio_content">
        <CustomSearchBox />
        <CustomHits />
      </InstantSearch>
    </>
  );
}