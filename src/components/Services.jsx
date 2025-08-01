import { serviceData } from "../data/ServiceData"
import ServiceCards from "./ServiceCards"

const Services = () => {
    return (
        <section>
            <div className="container">
                <div className="title">
                        <h2>Hardware, software, and services, working together as one.</h2>
                        <p>Minnovation hardware, software, and services work together to give your teams the power and flexibility to do whatever needs doing — whether  <br /> 
                        <span>you’re an integrator, OEM or running a global enterprise, Minnovation is here to support you.</span></p>
                </div>
                <div className="card-wrapper">
                    {
                        serviceData.map(()=> <ServiceCards />)
                    }
                </div>
            </div>
        </section>
    )
}

export default Services 