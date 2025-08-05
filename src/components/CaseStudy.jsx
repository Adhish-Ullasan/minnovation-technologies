import { casestudyData } from "../data/CaseStudyData"
import { CaseStudyCard } from "./CaseStudyCard"

const CaseStudy = () =>{
    return ( 
        <section id="caseStudy">
            <div className="container">
                <h2>Case Studies</h2>
                <p>Explore customer stories from organizations just like yours, from in industries just like yours to see how they’re using data to generate insights,<br />
                 make data driven decisions and accelerate their digital transformation.</p>
            </div>
            <div className="casecard-wrapper">
                {
                    casestudyData.map((item) => <CaseStudyCard data = {item}/>)
                }
            </div>
        </section>
    )
}

export default CaseStudy