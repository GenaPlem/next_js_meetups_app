import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/M%C3%BCnchen_Panorama-CN.jpg/1280px-M%C3%BCnchen_Panorama-CN.jpg"
      title="A First Meetup"
      address="Some Street 5, 12345 City"
      description="The meetup details"
    />
  );
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/M%C3%BCnchen_Panorama-CN.jpg/1280px-M%C3%BCnchen_Panorama-CN.jpg",
        id: meetupId,
        title: "A First Meetup",
        address: "Some Street 5, 12345 City",
        description: "The meetup details",
      },
    },
  };
}
