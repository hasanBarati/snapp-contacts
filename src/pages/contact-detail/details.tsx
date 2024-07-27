import React from "react";
import { IContact } from "../../types";
import { useInitilSocialData } from "./hooks/useInitilSocialData";

const Details = ({ data }: { data: IContact }) => {
  
  const { socialItems } = useInitilSocialData(data);

  return socialItems.map(({ name, value, image, iconSrc }) => (
    <div key={name} className="details-content-item">
      <div className="social-item">
        <img alt={image.alt} src={image.src} />
        <div className="social-item-info">
          <span className="social-item-name">{name}</span>
          <span>{value}</span>
        </div>
      </div>
      <img alt="" src={iconSrc} />{" "}
    </div>
  ));
};

export default Details;
