import "./PeopleCard.css";
import peopleImage from "../../assets/people-placeholder.jpg";

export default function PeopleCard() {
  return (
    <div data-component="people-card">
      <img className="people-image" src={peopleImage} alt="People image" />
      <div className="people-details-wrapper">
        <p className="people-name label-medium">Sadie Lawman</p>
        <p className="poeple-character-name body-small">Thor Odinson</p>
      </div>
    </div>
  );
}
