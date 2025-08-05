// const CaseStudyCard =  () => {
//     return(
        // <div className=" container case-cards">
        //     <div className="case-imageWrap">
        //         <img src="/images/home/faciliities.svg" alt="" />
        //     </div>
        //     <div>
        //         <h5>Facilities Management</h5>
        //         <h3>Preventing catastrophic HVAC Failures <br /> 
        //             in HIgh Rise Accomodation</h3>
        //         <p>
        //             Situated at 199 George Street in the Sydney CBD area next to The Rocks district <br />
        //             and Circular Quay, the Four Seasons Hotel, Sydney offers 5-star, luxurious <br />
        //             accommodations and more. The building was opened in October 1982 and has <br />
        //             498 guest rooms and 33 suites spread out over 34 stories. The building is also <br />
        //             home to the largest outdoor hotel swimming pool in Sydney, with separate <br />
        //             whirlpool and third floor sundeck. 
        //         </p>

        //         <div>
        //             <button className='primaryButton'>READ MORE</button>
        //         </div>
        //     </div>
        // </div>
//     )
// }

// export default CaseStudyCard

export const CaseStudyCard = (props) =>{
    const data = props.data
    return (
            <div className=" container case-cards">
            <div className="case-imageWrap">
                <img src={data.image} alt="" />
            </div>
            <div>
                <h5>{data.heading}</h5>
                <h3>{data.caseTopic}</h3>
                <p>{data.description}</p>

                <div>
                    <button className='primaryButton'>{data.button}</button>
                </div>
            </div>
        </div>
    )
}