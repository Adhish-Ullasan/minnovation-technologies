const ConnectForm = () => {

    return (
        <section id="connect">
            <div className="container">
                <div>
                    <h2>Lets Connect</h2>
                </div>
                <div>
                    <div className="connectimage-wrapper">
                        <img src="/images/home/connect.svg" alt="" />
                    </div>
                    <div>
                        <form action="./users" method="post">
                            <div>
                                <div>
                                <div>
                                    <input className="primaryInput" type="text" placeholder="Name*" />
                                </div>
                                <div>
                                    <input className="primaryInput" type="text" placeholder="Email*" />
                                </div>
                                </div>
                                <div>
                                <div>
                                    <input className="primaryInput" type="text" placeholder="Phone*" />
                                </div>
                                <div>
                                    <input className="primaryInput" type="text" placeholder="Subject*" />
                                </div>
                                </div>
                            </div>
                            <div>
                                <textarea
                                id="textarea"
                                name="textarea"
                                rows={7}
                                cols={50}
                                placeholder="Message*"
                                defaultValue={""}
                                />
                            </div>
                            <div className="primaryButton">
                                <div>
                                <button>
                                    SUBMIT
                                </button>
                                </div>
                            </div>
                            </form>
                        </div>
                     </div>
                </div>
            </section>
 )
}

                            export default ConnectForm