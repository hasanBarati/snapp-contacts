import React from "react";
import SearchForm from "../../components/search";
import useContactList from "./hooks/useFetch";
import ContactLists from "../../components/contact-lists";

function Contacts() {
  const { items, loader, handleSearch,loading } = useContactList();

  console.log("loading",loading)
  return (
    <>
      <SearchForm onSearch={handleSearch} />
      <ContactLists items={items} loaderRef={loader}   loading={loading} />
    </>
  );
}

export default Contacts;
