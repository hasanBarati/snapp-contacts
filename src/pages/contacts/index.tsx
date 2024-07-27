import React from "react";
import SearchForm from "../../components/search";
import useContactList from "./hooks/useFetch";
import ContactLists from "./contact-lists";
import Recents from "./recents";

const Contacts=()=> {
  const { items, loader, handleSearch, loading,error } = useContactList();

  return (
    <>
      <SearchForm onSearch={handleSearch} />
      <Recents/>
      <ContactLists items={items} loaderRef={loader} loading={loading} error={error} />
    </>
  );
}

export default Contacts;
