import { Header } from "../../components/headers/Header";
import { BannerAbout } from "../../components/bannerAbout/BannerAbout";
import { Subscribe } from "../../components/subscribe/Subscribe";
import { Footer } from "../../components/footers/Footer";
import { AboutUsAbout } from "../../components/aboutUsAbout/AboutUsAbout";
import { ChooseUsAbout } from "../../components/chooseUsAbout/ChooseUsAbout";
import { CategoriesAbout } from "../../components/categoriesAbout/CategoriesAbout";
import { ContentTeam } from "../../components/contentTeam/ContentTeam";
import { TeamMemberCard } from "../../components/Cards/TeamMemberCard";
import { teamMemberType, team } from "../../data/teamMemberData";

export const AboutUs = () => {
  return (
    <div className="about">
      <Header />
      <BannerAbout />
      <AboutUsAbout />
      <ChooseUsAbout />
      <ContentTeam />
      <div className="teamMember">
        {team.map((team: teamMemberType) => (
          <TeamMemberCard data={team} key={team.name} />
        ))}
      </div>
      <CategoriesAbout />
      <Subscribe />
      <Footer />
    </div>
  );
};
