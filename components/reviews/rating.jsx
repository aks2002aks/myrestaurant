import React from "react";
import StarRatings from "react-star-ratings";

const EventRating = ({ rating }) => {
  return (
    <div>
      <StarRatings
        rating={rating}
        starRatedColor="red"
        starEmptyColor="gray"
        starDimension="20px"
        starSpacing="2px"
        numberOfStars={5}
        name="rating"
      />
    </div>
  );
};

export default EventRating;
