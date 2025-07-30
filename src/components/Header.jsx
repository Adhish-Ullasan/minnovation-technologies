

const Header = () => {

    return (
        <header>
            <div className="container">
            <div>
              <img src="/images/logo192.png" alt="logo image" />
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