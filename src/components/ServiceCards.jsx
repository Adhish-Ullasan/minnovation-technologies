// const ServiceCards = () => {
//     return (
//          <div className="serviceCards">
//             <div>
//                 <div className="serviceImage">
//                     <img src="/images/home/datamanagement.svg" alt="data management" />
//                 </div>
//                 <div>
//                     <h5>Data Management System 1</h5>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ServiceCards

export const ServiceCards = (props) => {
    const data = props.data
    return (
         <div className="serviceCards">
            <div>
                <div className="serviceImage">
                    <img src= {data.Image} alt="data management" />
                </div>
                <div>
                    <h5>{data.serviceName}</h5>
                </div>
            </div>
        </div>
    )
}