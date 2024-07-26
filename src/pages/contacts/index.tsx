import React from "react";
import SearchForm from "../../components/search";
import useContactList from "./hooks/useFetch";
import ContactLists from "./contact-lists";
import Recents from "./recents";

function Contacts() {
  const { items, loader, handleSearch, loading } = useContactList();

  return (
    <main>
      <SearchForm onSearch={handleSearch} />
      <Recents/>
      <ContactLists items={items} loaderRef={loader} loading={loading} />

    </main>
  );
}

export default Contacts;
