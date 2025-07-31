

const Header = () => {

    return (
        <header>
            <div className="container">
            <div id="logo">
              <img src="/images/header/minovationlogo.svg" alt="logo image" />
              <h1>Minnovation<span id="companyname"><br />TECHNOLOGIES</span></h1>
            </div>
            <div className='headerOptions'>
                <div>
                  <p>Home</p>
                </div>
                <div>
                  <p>About</p>
                  </div>
                <div>
                  <p>Products</p>

                </div>
                  <p>Services</p>
                <div>
                  <p>Blog</p>
                </div>
              </div>
              <div>
                    <button className='primaryButton'>Conatct Us</button>
              </div>
            </div>
        </header>
    
    )
}


export default Header