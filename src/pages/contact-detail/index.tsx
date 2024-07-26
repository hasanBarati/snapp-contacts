import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IContact } from "../../types";
import { Details } from "./details";
import { Header } from "./header";

function ContactDetail() {
  const { id } = useParams();
  const [data, setData] = useState<IContact>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/passenger/${id}`,
          { signal }
        );
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {}
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [id]);

 
  return (
    <>
      <div className="details">
        <Header data={data!} />
        <div className="details-content">
          <h3>Details</h3>
          <Details data={data!} />
      
        </div>
      </div>
    </>
  );
}

export default ContactDetail;
