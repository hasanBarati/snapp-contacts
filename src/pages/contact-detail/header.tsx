import React from "react";
import { IContact } from "../../types";

export function Header({ data }: { data: IContact }) {
  return (
    <div className="details-header">
      <img
        src={data?.avatar}
        loading="lazy"
        alt="Andre Kevin"
        className="contact-pic-large"
      />
      <h1>{data?.first_name + " " + data?.last_name}</h1>
      <p>{data?.address}</p>
      <p>{data?.note}</p>
    </div>
  );
}
