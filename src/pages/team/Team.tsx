import { Header } from "../../components/headers/Header";
import { Footer } from "../../components/footers/Footer";
import {} from "../../components/headers/Header";
import {} from "../../components/headers/Header";
import { Subscribe } from "../../components/subscribe/Subscribe";
import { BannerTeam } from "../../components/banner/bannerTeam/BannerTeam";
import { teamMember, teamMemberType } from "../../data/teamMemberData";
import { TeamMemberCard } from "../../components/Cards/TeamMemberCard";
import "../../pages/team/team.css";
import { ContentTeam } from "../../components/contentTeam/ContentTeam";
import { databases } from "../../appwriteConfig";
import { Query } from "appwrite";
import { useEffect, useState } from "react";

export const Team = () => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    databases
      .listDocuments("6534c10e68de06206d3d", "6538da5c0729a4147b1e", [
        Query.equal("designation", ["Farmer", "Designer"]),
      ])
      .then(
        function (response) {
          setData(response.documents);
          return response;
        },
        function (error) {
          console.log(error);
        }
      );
  }, []);

  return (
    <div className="team">
      <Header />
      <BannerTeam />
      <ContentTeam />
      <div className="teamMember">
        {data.map((team: teamMemberType) => (
          <TeamMemberCard data={team} key={team.name} />
        ))}
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};
