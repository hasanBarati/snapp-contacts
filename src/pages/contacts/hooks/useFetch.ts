import { useEffect, useRef, useState } from "react";
import { IContact } from "../../../types";
import { buildUrl } from "../../../utils";

const useContactList = () => {
  const [items, setItems] = useState<IContact[]>([]);
  const [page, setPage] = useState<number>(0);
  const [query, setQuery] = useState<string>("");
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const loader = useRef(null);

  const handleSearch = (searchQuery: string) => {
    setItems([]);
    setPage(0);
    setHasMore(true);
    setQuery(searchQuery);
  };

  useEffect(() => {
    loadItems();
  }, [page, query]);

  const loadItems = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await fetch(buildUrl(query, page));
      const data = await response.json();
      setItems((prevItems) => [...prevItems, ...data.items]);
      setError(false);
      if (data.items.length === 0) setHasMore(false);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
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

  return { items, loader, hasMore, handleSearch, loading, error };
};

export default useContactList;
