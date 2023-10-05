import './App.css';
import Table from './Table';
import data from './Table/data'

function App() {
	return (
		<div className="App">
			<section className="container__top">
				<img className="allods" src='/section1/logo.png' alt="Logo" />
				<img className='glow' src='/section1/glow.png' alt='mafia glow' />
				<div className='content'>
					<div className='content__mafia'>
						<img className='boxes' src='/section1/boxes.png' alt='boxes' />
						<h2 className='char__title'>КОЛЛЕКЦИОННЫЕ ИЗДАНИЯ</h2>
						<h3 className='char__description'>Побеждайте легко, побеждайте стильно с новыми коллекционными изданиями «Аллодов Онлайн»!</h3>
					</div>
					<div className='mafia__container'>
						<img className='char char__left' src='/section1/char_left.png' alt='mafia left' />
						<img className='char char__right' src='/section1/char_right.png' alt='mafia right' />
					</div>
				</div>
				<div className='shadow shadow__right' />
				<div className='shadow shadow__left' />
				<div className='shadow shadow__bot' />
			</section>
			<section className="container__bot">
				<div className='container__left'>
					<img className='vito' src='/section2/Vito.png' alt='vito' />
					<div className='circle__blur'>asd</div>
				</div>
				<div className='container__right'>
					<h2 className='bot__title'>НАБОР «ПОСЫЛКА С КОНТРАБАНДОЙ»</h2>
					<div className='servers'>
						<div className='f2p__server server__style'>Бесплатные сервера</div>
						<div className='p2p__server server__style'>Подписочный сервер</div>
					</div>
					<div className='bonuses'>
						{
							data.map((item) => (<Table key={item.id} {...item} />))
						}
					</div>
					<div className='purchate__container'>
						<img className='box__logo' src='/section2/box.png' alt='box-logo' />
						<div className='btn__container'>
							<div className='price'>399 ₽</div>
							<button className='purchate__btn'>Приобрести</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default App;



