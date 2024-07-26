import React from "react";
import { IContact } from "../../types";

const Header = ({ data }: { data: IContact }) => {
  return (
    <div className="details-header">
      <img
        src={data?.avatar}
        loading="lazy"
        alt={data?.last_name}
        className="contact-pic-large"
      />
      <h1>{data?.first_name + " " + data?.last_name}</h1>
      <p>{data?.address}</p>
      <p>{data?.note}</p>
    </div>
  );
};

export default Header