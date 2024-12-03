import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/M%C3%BCnchen_Panorama-CN.jpg/1280px-M%C3%BCnchen_Panorama-CN.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/M%C3%BCnchen_Panorama-CN.jpg/1280px-M%C3%BCnchen_Panorama-CN.jpg",
    address: "Some address 25, 12456 Some City",
    description: "This is a second meetup!",
  },
];

export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}
