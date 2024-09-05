import ReactFullpage from "@fullpage/react-fullpage";
import Header from "../../00-utils/header/header.tsx";
import Slides from "./01-01-Slides.tsx";
import FooterContent from "../../00-utils/footer-content/footer-content.tsx";


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
                        <div className="section fp-auto-height" id="about-page4">
                            <FooterContent />
                        </div>
                    </ReactFullpage.Wrapper>
                )}
            />
        </>
    )
}

export default AboutPage;