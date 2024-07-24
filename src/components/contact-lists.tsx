import React, { MutableRefObject } from "react";
import { IContact } from "../types";

interface IcontactListsProps {
  items: IContact[];
  loaderRef: MutableRefObject<null>;
  loading: boolean;
}
const ContactLists = ({
  items,
  loaderRef,
  loading,
}: IcontactListsProps) => {
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="contact">
            {item.first_name}
          </li>
        ))}
      </ul>
  
      {loading ? (
        <div style={{ height: "20px" }}>Loading more items...</div>
      ) : null}
      <div ref={loaderRef} style={{ height: "20px" }} />
    </div>
  );
};

export default ContactLists;
