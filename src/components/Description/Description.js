import './Description.css';

const Description = () => {
    return (
        <div className='Description'>
            <p className='Description__text'>
            Данное приложение работает совместно с Вашим компьютером, поэтому понадобится установить на Ваш компьютер последнюю версию драйвера. <br />
            Подробнее о порядке работы приложения и о необходимом программном обеспечении можно узнать на странице продукта: <a className='Description__link' href='https://www.signal-com.ru/products/usb/smarttoken-pro/'>https://www.signal-com.ru/products/usb/smarttoken-pro/</a>
            </p>
            <p className='Description__attention'><span className='Description__bold'>Обращаем внимание!</span> В настройках мобильного приложения SmartToken-PRO имеется раздел с краткой инструкции по работе с приложением.</p>
            <h3 className='Description__company'>Компания «Сигнал-КОМ»</h3>
            <a className='Description__link Description__link--center' href='https://www.signal-com.ru/'>https://www.signal-com.ru/</a>
        </div>
    );
}

export default Description;