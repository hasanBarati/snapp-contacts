import { useEffect, useState } from "react";
import { IContact } from "../../../types";
import { baseURL } from "../../../api";

export function useContactDetail(id: string | undefined) {
  const [data, setData] = useState<IContact | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    const controller = new AbortController();
    const { signal } = controller;

    const fetchData = async () => {
      try {
        const response = await fetch(
          `${baseURL}/passenger/${id}`,
          { signal }
        );
        const result = await response.json();
        setData(result);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, [id]);

  return { data, loading, error };
}
