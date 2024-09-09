import ReactFullpage from "@fullpage/react-fullpage";
import Header from "../../components/header";
import Slides from "../../components/about-page/slides";
import Footer from "../../components/footer";

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
                        <Footer page="about-page4"/>
                    </ReactFullpage.Wrapper>

                )}
            />
        </>
    )
}

export default AboutPage;
