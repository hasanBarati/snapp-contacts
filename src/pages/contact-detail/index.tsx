import React from "react";
import { useParams } from "react-router-dom";
import { useContactDetail } from "./hooks/useFethc";
import Error  from "../../components/error";
import EmptyData from "../../components/empty-data";
import Header from "./header";
import Details from "./details";

const ContactDetail = () => {
  const { id } = useParams<string>();
  const { data, loading, error } = useContactDetail(id);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <Error />;
  }
  if (!data) {
    return <EmptyData />;
  }

  return (
    <div className="details">
      <Header data={data!} />
      <div className="details-content">
        <h3>Details</h3>
        <Details data={data!} />
      </div>
    </div>
  );
};

export default ContactDetail;
