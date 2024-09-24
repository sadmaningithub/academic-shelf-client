import Banner from "../components/Banner/Banner";
import CategorySection from "../components/CategorySection/CategorySection";
import StudyMaterials from "../components/StudyMaterials/StudyMaterials";



const Home = () => {
    return (
        <div className="">
            <div className="">
                <Banner></Banner>
            </div>
            <StudyMaterials></StudyMaterials>
            <CategorySection></CategorySection>
        </div>
    );
};

export default Home;