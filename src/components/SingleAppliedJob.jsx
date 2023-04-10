import React from "react";

const SingleAppliedJob = ({
  title,
  companyImage,
  companyName,
  jobTypes,
  location,
  salary
}) => {
  return (
    <div>
      <div>
        <img src={companyImage} alt={title} />

        <div>
          <p>{title}</p>
          <small>{companyName}</small>

      {/* =====Buttons=====  */}
          <div>
            {
              jobTypes.map((jobType) =><button type="button">{jobType}</button>)
            }
          </div>
        </div>
      </div>

      <div></div>
    </div>
  )
};

export default SingleAppliedJob;
