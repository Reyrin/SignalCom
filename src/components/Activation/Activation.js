import './Activation.css';

const Activation = () => {
    return (
        <div className='Activation'>
            <h3 className='Activation__title'>Для активации лицензии</h3>
            <p className='Activation__descr'>Отсканируйте установленным мобильным приложением QR код с лицензией:</p>
            <img className='Activation__qr' src='https://webs.e-notary.ru/wp-content/uploads/stok_qr/CA-1912-QR-ee74af9f18af6d8eaeb770347d6e9863.png' alt='QR' />
            <p className='Activation__descr'>
                <span className='Activation__or'>Или</span>
                Перейдите по ссылке с лицензией из браузера мобильного устройства:
            </p>
            <a className='Activation__btn' href='#'>Установить лицензию</a>
        </div>
    );
}

export default Activation;