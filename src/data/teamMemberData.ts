import teamMember1 from "../images/teamMember1.jpg";
import teamMember2 from "../images/teamMember2.jpg";
import teamMember3 from "../images/teamMember3.jpg";
import teamMember4 from "../images/teamMember4.jpg";
import teamMember5 from "../images/teamMember5.jpg";
import teamMember6 from "../images/teamMember6.jpg";

export const teamMember = [
  { 
    id:"1",
    image: teamMember1,
    name: "Giovani Bacardo",
    designation: "Farmer",
  },
  {
    id:"2",
    image: teamMember2,
    name: "Marianne Loreno",
    designation: "Designer",
  },
  {
    id:"3",
    image: teamMember3,
    name: "Riga Pelore",
    designation: "Farmer",
  },
  {
    id:"4",
    image: teamMember4,
    name: "Keira Knightley",
    designation: "Farmer",
  },
  {
    id:"5",
    image: teamMember5,
    name: "Scott Lawrence",
    designation: "Designer",
  },
  {
    id:"6",
    image: teamMember6,
    name: "Karen Allen",
    designation: "Farmer",
  },
];

export const team=teamMember.slice(0,3);

export type teamMemberType = {
  id?:string;
  image?: string;
  name?: string;
  designation?: string;
};
