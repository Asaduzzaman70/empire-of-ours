import Extra from "../Extra/Extra";
import ExtraSection from "../ExtraSection/ExtraSection";
import Banner from "../Pages/banner/Banner";
import CardSection from "../Pages/cardSection/CardSection";
import PropertyNumber from "../Pages/propertyNumber/PropertyNumber";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PropertyNumber></PropertyNumber>
            <CardSection></CardSection>
            <ExtraSection></ExtraSection>
            <Extra></Extra>
        </div>
    );
};

export default Home;