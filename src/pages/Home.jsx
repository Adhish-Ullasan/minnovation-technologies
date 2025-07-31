

const Home = () => {

    return (
        <>
        <div className="container">
            <div className="landingpage">
                <div>
                  <p>AlphaX Data Platform™</p>
                </div>
                <div>
                  <h2>Edge to Insight</h2>
                </div>
                <div>
                  <p>Transform data from sensors and field devices <br />
                    into insights for your team.</p>
                </div>
                <div>
                  <button className='primaryButton'>LEARN MORE</button>
                </div>
            </div>
            <div className="wrapper">
              <div></div>
              <div className="connect">
                  <div>
                    <h2>Connect and collaborate from asingle pane of glass.</h2>
                  </div>
                  <div>
                      <div>
                        <img src="/images/home/Analytics.svg" alt="analytics" />
                      </div>
                      <div>
                        <p>With AlphaX™ you can seamlessly connect your data from LPWAN, fieldbus and <br /> 
                          other time-series sources with the decision makers in your teams. You can easily <br />
                          create and share mind-blowing visualisations and put the right information into <br />
                          the hands of the right people at the right time. AlphaX will help you accelerate the <br />
                          work of your data scientists and business analysts… and it will do all of this from a <br />
                          single pane of glass.</p>
                          <div>
                            <button className='primaryButton'>GET STARTED</button>
                          </div>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
        </>
    )
  }
export default Home
