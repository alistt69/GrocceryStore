import ReactFullpage from "@fullpage/react-fullpage";
import Header from "../../components/header";
import FirstSection from "./first-section/firstSection.tsx";
import SecondSection from "./second-section/secondSection.tsx";
import Footer from "../../components/footer";

const MainPage = () => {

    return(
        <>
            <Header page='main' />

            <ReactFullpage

                debug

                normalScrollElements="#scrollable-element"

                navigation={false}
                controlArrows={false}


                loopTop={true}
                loopBottom={true}

                licenseKey="xxxxxxxxxxxxxxxxxxxxxxxxx"
                credits={{enabled: false}}
                render={() => (

                    <ReactFullpage.Wrapper>

                        <div className="section">

                            <FirstSection/>

                        </div>

                        <div className="section">

                            <SecondSection/>

                        </div>

                        <Footer page="" />

                    </ReactFullpage.Wrapper>

                )}
            />
        </>
    )
}

export default MainPage;