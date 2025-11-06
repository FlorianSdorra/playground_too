"use client";
import { useState } from "react";

function Heading({ title, description }) {
  return (
    <div
      style={{
        padding: "10px",
        fontWeight: "bold",
      }}
    >
      <h1>{title}</h1>
      <span>{description}</span>
    </div>
  );
}

export default function Page() {
  const title = "Page Test !!!!";
  const discription = "This is a react Primer...";
  const [vote, setVote] = useState(0);

  const handleUpvote = () => {
    setVote(vote + 1);
  };
  return (
    <div>
      <Heading title={title} description={discription} />
      <p>some more here ...</p>
      <button onClick={handleUpvote}>Upvote ({vote})</button>
    </div>
  );
}

// "use client";

// import { CalendarView } from "@calcom/atoms";
// import { BookerProps } from "@calcom/atoms/dist/packages/features/bookings/Booker";

// export default function Booker(props: BookerProps) {
//   return (
//     <div>
//       <CalendarView
//         username={props.username}
//         eventSlug={props.eventSlug}
//       ></CalendarView>
//     </div>
//   );
// }
