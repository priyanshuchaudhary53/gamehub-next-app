import PageHeading from "@/components/PageHeading";
import React from "react";

interface SearchParams {
  q?: string;
}

const SearchPage = ({ searchParams }: { searchParams: SearchParams }) => {
  return (
    <PageHeading>{`Search results for: '${
      searchParams ? searchParams["q"] : null
    }'`}</PageHeading>
  );
};

export default SearchPage;
