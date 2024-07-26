import React, { MutableRefObject } from "react";
import { useNavigate } from "react-router-dom";
import { IContact } from "../../types";
import SkeletonLoader from "../../components/skelton-loader";

interface IcontactListsProps {
  items: IContact[];
  loaderRef: MutableRefObject<null>;
  loading: boolean;
}
const ContactLists = ({ items, loaderRef, loading }: IcontactListsProps) => {
  const navigate = useNavigate();
  const recentData = JSON.parse(localStorage.getItem("recentContacts")!);

  function handleClick(item: IContact) {
    let newArray = recentData ?? [];
    const isExist = newArray.some((arr: IContact) => arr.id === item.id);

    if (!isExist) {
      newArray = [item, ...newArray];
      newArray = newArray.slice(0, 4);
      localStorage.setItem("recentContacts", JSON.stringify(newArray));
    }
    navigate(`/contact/${item.id}`);
  }

  return (
    <>
      <h2>Contact list</h2>
      <ul>
        {items.map((item, index) => (
          <li
            onClick={() => handleClick(item)}
            key={index}
            className="contact-list"
          >
            <div className="info">
              <img src={item.avatar} alt={item.first_name} width="50" />
              <div>
                <p>{item.first_name}</p>
                <p>{item.address || "___"}</p>
              </div>
            </div>
            <div className="info">
              <img
                alt="phone"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWElEQVR4nO3WvUvDQBgG8NOCIE6isyAujuLXajdHZxcXwVV0EVz8B1ysqDh1c/bjf3BwcMqQhnueS0IgHVzclIonBwkeJe1guatoH3inHPlxyb0vJ8Qo/y4A5kieA7juqkOt9ZgzmOQFSV1VANacwQCavWClVP1Pwo2hwCSPhgIrpeo9DtaHUmrJGRwEwQSAl26U5I5wHZKXFvxGckv4SBRFCyQ7BfwgfIbfu+5IKVe9wUmSTJNsF3grDMNZbzjJTQCfBf6U5/mUNxzAsXW677TWNZ94w8Jv0zSdrFoXx/EyyQ0p5UpZSqnFH8Na63GSNxb+mGXZjL1GSrld9HvV1NsfBK+RPLVe1jI7NM9Mn1vtVzX1mmLQANgl+V62Gsn7Yshop7CJuRAAeO6HOYGt/75H8tUrXMYMFpInJNM+8JVwFfMFAKwDOABwVl4SzcUxjuN5Z/AovzZfnft2YfvGmT0AAAAASUVORK5CYII="
              />
              <p>{item.phone}</p>
            </div>
          </li>
        ))}
      </ul>

      {loading
        ? Array.from({ length: 4 }).map((_, index) => (
            <SkeletonLoader key={index} />
          ))
        : null}
      <div ref={loaderRef} />
    </>
  );
};

export default ContactLists;
