import './Payment.css';

const Payment = () => {
    return (
        <div className='Payment'>
            <h1 className='Payment__title'>Оплата прошла успешно ✅</h1>
            <p className='Payment__descr'>
            <span className='Payment__name'>Валерий Ефремов</span>, Вы успешно произвели оплату лицензии SmartToken-PRO по заказу <span className='Payment__order'>№CA-1912 от 18.05.2021</span> <br/>
Копия данного сообщения отправлена на указанную вами почту: <a href="mailto:ee.vv.vv.2015@gmail.com" className='Payment__mail'>ee.vv.vv.2015@gmail.com</a>
            </p>
        </div>
    );
}

export default Payment;