import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";

import './header.css'
function Header() {
    return (
        <>
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Currency Converter</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                                
                            </li>
                            <li className="nav-item">
                                <Link to="/table" className="nav-link active" aria-current="page">Rates</Link>
                                
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
         </div>
         <div className='header-card'>
            <h1 className="title">Currency Converter</h1>
            <p className="descr">Convert 140 currencies at the mid-market exchange rate. Wise is the international account for sending, spending and converting money like a local.</p>
            </div>
        </>
    )
}
export default Header