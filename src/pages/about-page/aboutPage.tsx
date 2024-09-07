import Header from "../../components/header";
import ReactFullpage from "@fullpage/react-fullpage";
import FooterContent from "../../components/footer";
import Slides from "./slides";

const AboutPage = () => {

    return(
        <>
            <Header page='about'/>

            <ReactFullpage

                debug

                controlArrows={false}

                credits={{enabled: false}}

                loopTop={true}
                loopBottom={true}

                licenseKey="xxxxxxxxxxxxxxxxxxxxxxxxx"

                render={() => (

                    <ReactFullpage.Wrapper>

                        <Slides />


                        <FooterContent page="about-page4"/>

                    </ReactFullpage.Wrapper>

                )}
            />
        </>
    )
}

export default AboutPage;