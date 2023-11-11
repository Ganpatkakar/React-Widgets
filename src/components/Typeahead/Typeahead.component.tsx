import React, {useState} from 'react';
import styles from "./Typeahead.module.scss";
import { Debounce } from "../Debounce";

function Typeahead() {
  const [search, setSearch] = useState("");

  const handleSearch = (e: any) => {
    const searchValue = e.target.value
    console.log(searchValue)
    setSearch(searchValue)
  }

  return <div className={styles.typeaheadContainer}>
    <input type="text" value={search} onChange={handleSearch} />
    <div className={styles.resultsContainer}></div>
  </div>;
}

export default Typeahead;
