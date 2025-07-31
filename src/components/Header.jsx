

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
                  <a href="#">Home</a>
                </div>
                <div>
                  <a href="#">About</a>
                </div>
                <div>
                  <a href="#">Product</a>
                </div>
                <div>
                  <a href="#">Services</a>
                </div>
                <div>
                  <a href="#">Blog</a>
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