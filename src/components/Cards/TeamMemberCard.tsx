import { teamMemberType } from "../../data/teamMemberData";
import "../../components/Cards/teamMemberCard.css";

export const TeamMemberCard = ({ data }: { data: teamMemberType }) => {
  return (
    <div className="teamMemberCard">
      <img className="profilePicture" src={data.image} />
      <h4 className="name">{data.name}</h4>
      <p className="designation">{data.designation}</p>
    </div>
  );
};
