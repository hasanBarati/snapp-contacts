import { useState, useEffect, useRef } from "react";
import { IContact } from "../../../types";
import { containsOnlyDigits } from "../../../utils";

const useContactList = () => {
  const [items, setItems] = useState<IContact[]>([]);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const loader = useRef(null);

  useEffect(() => {
    loadItems();
  }, [page, query]);

  const loadItems = async () => {
    if (loading) return;
    setLoading(true);
    try {
      let phone = "",
        name = "";
      containsOnlyDigits(query) ? (phone = query) : (name = query);
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/passenger/?` +
          new URLSearchParams({
            ...(query &&
              query !== "" && {
                where: `{"first_name":{"contains":"${name}"},"phone":{"contains":"${phone}"}}`,
              }),

            sort: "createdAt",
            limit: "10",
            skip: page === 0 ? String(page) : String(page - 1),
          })
      );
      const data = await response.json();

      //@ts-ignore
      setItems((prevItems) => [...prevItems, ...data.items]);
      if (data.items.length === 0) setHasMore(false);
    } catch (error) {
      console.error("Error fetching items", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (searchQuery: string) => {
    setItems([]);
    setPage(0);
    setHasMore(true);
    setQuery(searchQuery);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPage((prevPage) => prevPage + 1);
      }
    });

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [hasMore]);

  return { items, loader, hasMore, handleSearch,loading };
};

export default useContactList;
