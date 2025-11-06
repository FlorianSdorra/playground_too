function Heading({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <span>{description}</span>
    </div>
  );
}

export default function Page() {
  const title = "Page Test !!!!";
  const discription = "This is a react Primer...";
  return (
    <div>
      <Heading title={title} description={discription} />
      <p>some more here ...</p>
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
