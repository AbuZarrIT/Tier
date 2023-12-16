import './MainPage.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
const MainPage = () => {
    const navigate = useNavigate();
    const tierPage = () => {
        navigate('/Tier');
    };
    return(
        <div className="MainPage">
            <ul className="MainPage-list">
                <li className="MainPage-list-item">
                    <button 
                        className="MainPage-list-btn"
                        onClick={tierPage}
                        style={{backgroundImage: 'url(/btn-img/img-tier-btn.jpg)'}}>
                    </button>
                </li>
               
            </ul>
        </div>
    )
}
export default MainPage;