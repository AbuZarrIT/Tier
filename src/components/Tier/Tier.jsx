import Search from '../Search/Search';
import './Tier.css'
import {React,useState} from 'react';
const Tier = () => {
    
    const [data,setData] = useState(
        [
            {id: 0, name: 'fuchs',url: 'url(/tier-img/tier1.png)',bg: 'white',sound: '/tier-mp3/fuchs.mp3'},
            {id: 1, name: 'elefant',url: 'url(/tier-img/tier2.png)',bg: 'white',sound: '/tier-mp3/elefant.mp3'},
            {id: 2, name: 'affe',url: 'url(/tier-img/tier3.png)',bg: 'white',sound: '/tier-mp3/affe.mp3'},
            {id: 3, name: 'katze',url: 'url(/tier-img/tier4.jpg)',bg: 'white',sound: '/tier-mp3/katze.mp3'},
            {id: 4, name: 'hund',url: 'url(/tier-img/tier5.png)',bg: 'white',sound: '/tier-mp3/hund.mp3'},
            {id: 5, name: 'schwein',url: 'url(/tier-img/tier6.png)',bg: 'white',sound: '/tier-mp3/schwein.mp3'},
            {id: 6, name: 'huhn',url: 'url(/tier-img/tier7.png)',bg: 'white',sound: '/tier-mp3/huhn.mp3'},
            {id: 7, name: 'bock',url: 'url(/tier-img/tier8.jpg)',bg: 'white',sound: '/tier-mp3/bock.mp3'},
            {id: 8, name: 'igel',url: 'url(/tier-img/tier9.jpg)',bg: 'white',sound: '/tier-mp3/igel.mp3'},
            {id: 9, name: 'küken',url: 'url(/tier-img/tier11.jpg)',bg: 'white',sound: '/tier-mp3/küken.mp3'},
            {id: 10, name: 'kuh',url: 'url(/tier-img/tier12.png)',bg: 'white',sound: '/tier-mp3/kuh1.mp3'},
            {id: 11, name: 'schaf',url: 'url(/tier-img/tier13.jpg)',bg: '',sound: '/tier-mp3/huhn.mp3'}
        ]
    )
    const [resultSearch,setresultSearch] = useState([])
    const playSound = (soundPath) => {
        const audio = new Audio(soundPath);
        audio.play();
    };
    const elements = data.map((item,index) => (
        <li className="Tier-list-item" key={index}>
            <button 
                className="Tier-list-item-btn"
                style={{backgroundImage: item.url ,backgroundColor: item.bg}}
                onClick={() => {playSound(item.sound)}}>
            </button>
        </li>
    ))
    const SearchElements = resultSearch.map((item,index) => (
        <li className="Tier-list-item results" key={index}>
            <button 
                className="Tier-list-item-btn"
                style={{backgroundImage: item.url ,backgroundColor: item.bg}}
                onClick={() => playSound(item.sound)}>
            </button>
        </li>
    ))
   /*  const [dataAlertImg,setDataAlertImg] = useState([
        {id: 0, url:'url(/public/alert-img/fuchs-alert.jpeg)'},
        {id: 1, url:'url(/public/alert-img/fuchs-alert.jpeg)'},
        {id: 2, url:'url(/public/alert-img/fuchs-alert.jpeg)'},
        {id: 3, url:'url(/public/alert-img/fuchs-alert.jpeg)'},
    ]) */
    
    return(
        <div className="Tier">
            <Search data={data} setData={setData} resultSearch={resultSearch} setresultSearch={setresultSearch} />
            <ul className="Tier-search-list">
                {SearchElements}
            </ul>
            <ul className="Tier-list">     
                {elements}     
            </ul>
        </div>
    )
}
export default Tier;