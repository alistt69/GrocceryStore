import ReactFullpage from "@fullpage/react-fullpage";
import Header from "../../components/header";
import FirstSection from "../../components/main-page/first-section";
import SecondSection from "../../components/main-page/second-section";
import Footer from "../../components/footer";

const MainPage = () => {

    return(
        <>
            <Header page='main' />
            <ReactFullpage

                debug
                normalScrollElements="#scrollable-element"
                controlArrows={false}
                credits={{enabled: false}}
                loopTop={true}
                loopBottom={true}
                render={() => (

                    <ReactFullpage.Wrapper>
                        <FirstSection />
                        <SecondSection />
                        <Footer page="main-page3" />
                    </ReactFullpage.Wrapper>

                )}
            />
        </>
    )
}

export default MainPage;
