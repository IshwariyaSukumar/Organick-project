import React from "react";
import { Header } from "../../components/headers/Header";
import { BannerTeam } from "../../components/banner/bannerTeam/BannerTeam";
import { Subscribe } from "../../components/subscribe/Subscribe";
import { Footer } from "../../components/footers/Footer";
import { databases } from "../../appwriteConfig";
import { Query } from "appwrite";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TeamMemberCard } from "../../components/Cards/TeamMemberCard";
import { teamMemberType } from "../../data/teamMemberData";
import "../../pages/team/team.css";

export const Member = () => {
  const { id } = useParams();

  const [data, setData] = useState<any>([]);
  useEffect(() => {
    databases
      .listDocuments("6534c10e68de06206d3d", "6538da5c0729a4147b1e", [
        Query.equal("id", parseInt(id as string)),
      ])
      .then(
        function (response) {
          console.log(response.documents);
          setData(response.documents);
          return response;
        },
        function (error) {
          console.log(error);
        }
      );
  }, []);

  return (
    <div>
      <Header />
      <BannerTeam />
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
