import { teamMemberType } from "../../data/teamMemberData";
import "../../components/Cards/teamMemberCard.css";
import { Link } from "react-router-dom";

export const TeamMemberCard = ({ data }: { data: teamMemberType }) => {
  return (
    <div className="teamMemberCard">
      <Link to={{ pathname: `/member/${data.id}` }}>
        <img className="profilePicture" src={"/" + data.image} />
      </Link>
      <h4 className="name">{data.name}</h4>
      <p className="designation">{data.designation}</p>
    </div>
  );
};
