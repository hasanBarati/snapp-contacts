import React from "react";
import SearchForm from "../../components/search";
import useContactList from "./hooks/useFetch";
import ContactLists from "./contact-lists";

function Contacts() {
  const { items, loader, handleSearch, loading } = useContactList();

  return (
    <main>
      <SearchForm onSearch={handleSearch} />
      <ContactLists items={items} loaderRef={loader} loading={loading} />
    </main>
  );
}

export default Contacts;
