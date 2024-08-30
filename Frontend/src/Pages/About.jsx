import PageTitle from "../components/PageTitle";
import styled from "styled-components";

const AboutContainer = styled.div`
  p {
    font-size: 0.9rem;
    line-height: 1.6;
    color: #9d9d9d;
    font-weight: 300;
    padding-bottom: 15vh;
  }
`;

export default function About() {
  return (
    <AboutContainer>
      <PageTitle
        margin={"50px 0"}
        topTitle="About"
        title="Heard About Us?"
        titlePartOne="Here is a little about us."
        subtitlePartOne="We are a travel company that offers amazing tours!"
        subtitlePartTwo="best destinations every month."
      />
      <p>
        Our tour agency play a pivotal role in crafting memorable travel experiences by offering a
        wide array of services designed to cater to diverse preferences and needs. These agencies
        provide comprehensive travel packages that include everything from transportation and
        accommodation to guided tours and dining arrangements. By leveraging their extensive network
        of partners and local contacts, tour agencies can offer exclusive deals and access to unique
        destinations that travelers might not discover on their own. They assist in planning
        itineraries that balance popular attractions with off-the-beaten-path experiences, ensuring
        a well-rounded journey. Additionally, tour agencies offer personalized consultation
        services, where experienced agents work closely with clients to tailor trips based on their
        interests, budget, and time constraints. This bespoke approach helps in creating a more
        enriching and stress-free travel experience. They also handle all the logistical aspects of
        travel, including visa arrangements, insurance, and currency exchange, which can often be
        overwhelming for travelers. For those seeking adventure, cultural immersion, or relaxation,
        tour agencies provide specialized packages such as adventure tours, cultural excursions, or
        wellness retreats. Their expertise extends to organizing group travel, corporate retreats,
        and family vacations, offering logistical support and group management to ensure smooth
        coordination. Moreover, tour agencies stay abreast of the latest travel trends and safety
        regulations, advising clients on the best practices and current requirements for
        international travel. They also offer 24/7 customer support, addressing any issues or
        changes in plans that may arise during the trip. By providing detailed information and
        insights about destinations, including local customs, weather conditions, and must-see
        attractions, tour agencies enhance travelers’ preparedness and enjoyment. Their role as
        intermediaries between travelers and service providers ensures that clients receive
        high-quality services and memorable experiences. Overall, tour agencies are invaluable in
        making travel planning efficient, enjoyable, and tailored to individual preferences, turning
        the dream of a perfect trip into a reality.
      </p>
    </AboutContainer>
  );
}
