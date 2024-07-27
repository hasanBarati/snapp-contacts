import React from "react";

const SkeletonLoader = () => {
    return (
      <div className="skeleton-card">
        <div className="skeleton-info">
          <div className="skeleton skeleton-avatar"></div>
          <div className="skeleton-contactDetails">
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
          </div>
        </div>
        <div className="skeleton-info">
          <div className="skeleton skeleton-phone"></div>
        </div>
      </div>
    );
  };
  
  export default SkeletonLoader;
