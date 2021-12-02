import { useState } from "react";

import SearchInput from "./searchInput";
import Suggestions from "./suggestions";
const Header = () => {
  const [query, setQuery] = useState("");
  const [queryType, setQueryType] = useState("movie");

  const manageQueryState = (e) => {
    setQuery(e.target.value);
  };

  const manageQueryTypeState = (e) => {
    setQueryType(e.target.value);
  };

  return (
    <div>
      <SearchInput
        query={query}
        manageQueryState={manageQueryState}
        manageQueryTypeState={manageQueryTypeState}
      />
      <Suggestions query={query} queryType={queryType} />
    </div>
  );
};

export default Header;
