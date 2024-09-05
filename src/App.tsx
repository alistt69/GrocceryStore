import ReactFullpage from "@fullpage/react-fullpage";
import FirstSection from "./01-section/00-01-Section.tsx";
import SecondSection from "./02-section/00-02-Section.tsx";
import FooterContent from "./00-utils/footer-content/footer-content.tsx";
import Header from "./00-utils/header/header.tsx";



const App = () => {



    return (
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

                        <div className="section" id="first">

                            <FirstSection/>

                        </div>

                        <div className="section" id="second">

                            <SecondSection/>

                        </div>

                        <div className="section fp-auto-height" id="third">

                            <FooterContent />

                        </div>

                    </ReactFullpage.Wrapper>

                )}
            />


        </>
    )
}

export default App
