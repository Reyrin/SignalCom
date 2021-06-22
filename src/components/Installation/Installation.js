import './Installation.css';

const Installation = () => {
    return (
        <div className='Installation'>
            <div  className='Installation__title'>Для установки лицензии Вам понадобится <br/> установленное мобильное приложение SmartToken-PRO</div>
            <a href="https://play.google.com/store/apps/details?id=ru.signalcom.androidtoken&amp;hl=ru" target="_blank" className='Installation__link'>
                <img className='Installation__img' src="https://play.google.com/intl/en_us/badges/static/images/badges/ru_badge_web_generic.png" alt="Get it on Google Play" />
            </a>
        </div>
    );
}

export default Installation;