import React from "react";
const CourseItem = ({ data }) => {
  return (
    <div>
      <img src={data.thumbnail_cdn} alt="this is hinh anh" />
      <h1 className="course-item-title">{data.title}</h1>
      <p className="course-item-description">{data.description}</p>
    </div>
  );
};

export default CourseItem