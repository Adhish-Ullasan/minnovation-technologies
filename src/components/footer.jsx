
const Footer = () => {

    return (
            <footer>
            <div className="contianer">
                <div>
                <div id="footerLogo">
                    <img src="/images/footer/footerlogo.svg" alt="" />
                    <h1>Minnovation<span id="companyname"><br />TECHNOLOGIES</span></h1>
                </div>
                <div className="description">
                    <p>
                   Minnovation Technologies design and <br />
                   develop a suite of IoT products. Our <br />
                   mission is to helpour customers to deliver <br />
                   IoT projects better, faster and easier.
                    </p>
                </div>
                <div className="call">
                    <div>
                    <img src="./assets/call-svgrepo-com.svg" alt="" />
                    </div>
                    <div>
                    <p>Got Question? Call us 24/7</p>
                    <a href="#">Call: +0123 456 789</a>
                    </div>
                </div>
                </div>
                <div className="footerOptions">
                <h3>Useful Links</h3>
                <ul>
                    <li>
                    <a href="#">About Molla</a>
                    </li>
                    <li>
                    <a href="#">Our Services</a>
                    </li>
                    <li>
                    <a href="#">How to shop on Molla</a>
                    </li>
                    <li>
                    <a href="#">FAQ</a>
                    </li>
                    <li>
                    <a href="#">Contact us</a>
                    </li>
                </ul>
                </div>
                <div className="footerOptions">
                <h3>Customer Services</h3>
                <ul>
                    <li>
                    <a href="#">Payment Methods</a>
                    </li>
                    <li>
                    <a href="#">Money-back gaurantee!</a>
                    </li>
                    <li>
                    <a href="#">Returns</a>
                    </li>
                    <li>
                    <a href="#">Shipping</a>
                    </li>
                    <li>
                    <a href="#">Terms and conditions</a>
                    </li>
                    <li>
                    <a href="#">Privacy policy</a>
                    </li>
                </ul>
                </div>
                <div className="footerOptions">
                <h3>My Account</h3>
                <ul>
                    <li>
                    <a href="#">Sign in</a>
                    </li>
                    <li>
                    <a href="#">View Cart</a>
                    </li>
                    <li>
                    <a href="#">My wishlist</a>
                    </li>
                    <li>
                    <a href="#">Track My Order</a>
                    </li>
                    <li>
                    <a href="#">Help</a>
                    </li>
                </ul>
                </div>
            </div>
            <div className="contianer">
                <div>
                <p>Copyright © 2025 Molla Store. All Rights Reserved.</p>
                </div>
                <div>
                <img src="./assets/payments.png" alt="" />
                </div>
            </div>
            </footer>
    )
} 

export default Footer