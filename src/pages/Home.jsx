import Banner from "../components/Banner/Banner";
import CategorySection from "../components/CategorySection/CategorySection";
import DiscussionSection from "../components/DiscussionSection/DiscussionSection";
import StudyMaterials from "../components/StudyMaterials/StudyMaterials";



const Home = () => {
    return (
        <div className="">
            <div className="">
                <Banner></Banner>
            </div>
            <StudyMaterials></StudyMaterials>
            <CategorySection></CategorySection>
            <DiscussionSection></DiscussionSection>
        </div>
    );
};

export default Home;