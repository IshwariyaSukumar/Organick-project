import { Header } from "../../components/headers/Header";
import { BannerAbout } from "../../components/banner/bannerAbout/BannerAbout";
import { Subscribe } from "../../components/subscribe/Subscribe";
import { Footer } from "../../components/footers/Footer";
import { AboutUsAbout } from "../../components/aboutUsAbout/AboutUsAbout";
import { ChooseUsAbout } from "../../components/chooseUsAbout/ChooseUsAbout";
import { CategoriesAbout } from "../../components/categoriesAbout/CategoriesAbout";
import { ContentTeam } from "../../components/contentTeam/ContentTeam";
import { TeamMemberCard } from "../../components/Cards/TeamMemberCard";
import { teamMemberType, team } from "../../data/teamMemberData";
import "../../pages/about/aboutUs.css";
import { databases } from "../../appwriteConfig";
import { Query } from "appwrite";
import { useEffect, useState } from "react";

export const AboutUs = () => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    databases
      .listDocuments("6534c10e68de06206d3d", "6538da5c0729a4147b1e", [
        Query.limit(3),
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
    <div className="about">
      <Header />
      <BannerAbout />
      <AboutUsAbout />
      <ChooseUsAbout />
      <ContentTeam />
      <div className="teamMemberAbout">
        <div className="teamMember">
          {data.map((team: teamMemberType) => (
            <TeamMemberCard data={team} key={team.name} />
          ))}
        </div>
      </div>
      <CategoriesAbout />
      <Subscribe />
      <Footer />
    </div>
  );
};
