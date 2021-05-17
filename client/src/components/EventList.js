import React from "react";
import { Link } from "react-router-dom";

export default function EventList(props) {
  return (
    <div>
      {props.events.map((event) => {
        return (
          <h3 key={event._id}>
            <Link to={`/events/${event._id}`}>{event.title}</Link>
          </h3>
        );
      })}
    </div>
  );
}