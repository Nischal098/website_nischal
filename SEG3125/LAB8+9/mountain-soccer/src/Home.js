import { useState } from 'react';
import team from './Images/team.jpg'
import coach1 from './Images/Coach1.png'
import coach2 from './Images/Coach2.png'
import coach3 from './Images/Coach3.png'
import trophy from './Images/trophy.png'
import { Link } from 'react-router-dom';
import common_en from "./translations/en/common.json";
import common_fr from "./translations/fr/common.json";
import {I18nextProvider, useTranslation} from "react-i18next";
import i18next from "i18next";

const Home = () => {

    const [t, i18n] = useTranslation('common');

    // let name = 'mario';
    const [name, setName] = useState('mario');

    const handleClick = () => {
        console.log("Hello World");
        setName('luigi');
    }

    const handleClickAgain = (name) => {
        console.log('Hello ' + name);
    }

    return (
        <div className="home">
            <button onClick={() => i18n.changeLanguage('en')}>English</button>
            <button onClick={() => i18n.changeLanguage('fr')}>Français</button> <br /> <br />
            <h2>{t('home.aboutUs')}</h2>
            <p>{t('home.aboutUs-Info')}</p>

            <h2>{t('home.ourTeam')}</h2>
            <p> {t('home.ourTeam-p')} <br />
            <img src={team} width="300" height="250" /></p>

            <h2>{t('home.coaches')}</h2>
            <p>{t('home.coach-p')}
                <br /> </p>

            <div className="row">

            {/* Column1 */}
            <div className="col">
                <h4>Mario</h4>
                <img src={coach1} width="300" height="250" /> <br /> <br />
            </div>
            {/* Column2 */}
            <div className="col">
                <h4>Luigi</h4>
                <img src={coach2} width="300" height="250" /> <br /> <br />
            </div>
            {/* Column3 */}
            <div className="col">
                <h4>Yoshi</h4>
                <img src={coach3} width="300" height="250" /> <br /> <br />
            </div>
            </div>

            <h2>{t('home.clubAccomplishment')}</h2>
            <p>{t('home.clubAccomplishment-p')}<br />
            <img src={trophy} /></p>


            <h2>{t('home.lessonsGeneralInfo')}</h2>
            <p>  <Link to="/lessons" className="btn btn-primary">{t('home.bookLessons')}</Link> 
            {t('home.bookLessons-p')}</p>

            <h2>{t('home.bookField')}</h2>
            <p> <Link to="/book" className="btn btn-primary">{t('home.bookField')}</Link> 
            {t('home.bookField-p')}</p>
        </div>
    );
}

export default Home;