const ConnectForm = () => {

    return (
        <section id="connect">
            <div className="container">
                <div>
                    <h2>Lets Connect</h2>
                </div>
                <div className="formDetails">
                    <div className="connectimage-wrapper">
                        <img src="/images/home/connect.svg" alt="" />
                    </div>
                    <div>
                        <p>To learn more about optimising your operation or to become a partner, <br />fill out the form to the right. We have experts ready to help you!</p>
                        <form action="./users" method="post">
                            <div>
                                <div>
                                    <div>
                                        <input className="primaryInput" type="text" placeholder="Firstname*" />
                                    </div>
                                    <div>
                                        <input className="primaryInput" type="text" placeholder="Lastname*" />
                                    </div>
                                </div>
                                <div>
                                    <input className="primaryInput" type="text" placeholder="Email*" />
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
                            <div>
                                <div>
                                <button  className="primaryButton">
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