import { Header } from "../../components/headers/Header";
import { Footer } from "../../components/footers/Footer";
import {} from "../../components/headers/Header";
import {} from "../../components/headers/Header";
import { Subscribe } from "../../components/subscribe/Subscribe";
import { BannerTeam } from "../../components/bannerTeam/BannerTeam";
import { teamMember, teamMemberType } from "../../data/teamMemberData";
import { TeamMemberCard } from "../../components/Cards/TeamMemberCard";
import "../../pages/team/team.css";
import { ContentTeam } from "../../components/contentTeam/ContentTeam";

export const Team = () => {
  return (
    <div className="team">
      <Header />
      <BannerTeam />
      <ContentTeam />
      <div className="teamMember">
        {teamMember.map((team: teamMemberType) => (
          <TeamMemberCard data={team} key={team.name} />
        ))}
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};
