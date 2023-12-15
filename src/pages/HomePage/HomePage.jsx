import MainLayout from "../../layout/MainLayout";
import Hero from "../../components/homeComponents/Hero";
import Services from "../../components/homeComponents/Services";
import WhoAreWe from "../../components/homeComponents/WhoWeAre";

function HomePage () {
    return (
        <>
            <MainLayout border="dotted">
                <Hero/>
                <Services/>
                <WhoAreWe/>
            </MainLayout>
        </>
    )
}

export default HomePage;

