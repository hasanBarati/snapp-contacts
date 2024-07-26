import React from "react";
import { useNavigate } from "react-router-dom";
import { IContact } from "../../types";
import EmptyData from "../../components/empty-data";

export default function Recents() {
  const recentData: IContact[] = JSON.parse(
    localStorage.getItem("recentContacts")!
  );
  const navigate = useNavigate();
  return (
    <>
      <h2>Recents</h2>
      <ul className="recent">
        {recentData?.map((item, index) => (
          <li
            onClick={() => navigate(`/contact/${item.id}`)}
            key={index}
            className="recent-contact-lists"
          >
            <img
              src={item.avatar}
              alt={item.first_name}
              width="50"
              className="image"
              loading="lazy"
            />

            <p>{item.first_name}</p>
          </li>
        ))}
      </ul>
      {!recentData ? <EmptyData /> : null}
    </>
  );
}
