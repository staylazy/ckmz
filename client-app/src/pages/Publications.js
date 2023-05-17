import Navbar from '../components/NavBar';
import '../css/Publications.css';

export function Publications() {
  return (
    <div class='publications'>
      <Navbar />
      <main class="content">
        <section class='news'>
          <div class="two-columns">
            <h2 class='two-columns__title'>Другие новости</h2>
            <div class='two-columns__content'>
              <ul class='two-columns__list'>
                <li class='two-columns__item'>
                  Пожары в Томских лесах!
                  <time class='two-columns__time'>03/02/2023</time>
                </li>
                <li class='two-columns__item'>
                  Пожары не только в Томске!
                  <time class='two-columns__time'>03/02/2023</time>
                </li>
                <li class='two-columns__item'>
                  ЦКМЗ лучше всех!
                  <time class='two-columns__time'>03/02/2023</time>
                </li>
                <li class='two-columns__item'>
                  Где можно рубить деревья?
                  <time class='two-columns__time'>03/02/2023</time>
                </li>
              </ul>
              <button class='two-columns__button'>Предложить новость</button>
            </div>
          </div>
          <div class="two-columns">
            <h2 class='two-columns__title'>Научная конференция</h2>
            <div class='two-columns__content'>
              <div class='two-columns__paragraphs'>
                <p class='two-columns__paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus diam risus morbi nulla dictum. Urna mi orci gravida placerat amet, eu, aliquet facilisis aliquet. Dolor praesent nam ornare fringilla enim nibh donec sit imperdiet. Amet, diam duis eu sit et. Volutpat vestibulum a lectus sed blandit.</p>
                <p class='two-columns__paragraph'>Venenatis urna mattis eu enim molestie iaculis et aliquet. Velit in pellentesque vestibulum phasellus orci. Fermentum sed phasellus aliquam nulla non aenean. Quisque id nunc, mauris potenti a massa. Fermentum at elit, convallis leo dolor aliquet id elementum. Ullamcorper sociis et cum bibendum in egestas. Diam, urna, sed tempus mollis aliquam elit. Facilisi nam nulla pulvinar mauris vel lacinia venenatis.</p>
                <p class='two-columns__paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus diam risus morbi nulla dictum. Urna mi orci gravida placerat amet, eu, aliquet facilisis aliquet. Dolor praesent nam ornare fringilla enim nibh donec sit imperdiet. Amet, diam duis eu sit et. Volutpat vestibulum a lectus sed blandit.</p>
              </div>
            <section class='two-columns__photos'>
              <div class='two-columns__photo-item'></div>
              <div class='two-columns__photo-item'></div>
              <div class='two-columns__photo-item'></div>
              <time class='two-columns__time-photo'>03/02/2023</time>
            </section>
            </div>
          </div>
        </section>
      </main>
      <h2 class='publications__footer'>Made by TUSUR</h2>      
    </div>
  )
}