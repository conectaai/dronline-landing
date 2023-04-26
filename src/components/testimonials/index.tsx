import './style.scss';
import Banner from '../banner';

export default function Testimonials() {

  return (
    <section className="innovative-solution">
        <div className="d-flex align-items-center">
          <div className="container">
              <h2 className='title-32-medium'>O que nossos clientes dizem sobre nós</h2>
          </div>
          <div className="owl-carousel owl-theme">
            <div className="item"><h4>1</h4></div>
            <div className="item"><h4>2</h4></div>
            <div className="item"><h4>3</h4></div>
            <div className="item"><h4>4</h4></div>
            <div className="item"><h4>5</h4></div>
            <div className="item"><h4>6</h4></div>
            <div className="item"><h4>7</h4></div>
            <div className="item"><h4>8</h4></div>
            <div className="item"><h4>9</h4></div>
            <div className="item"><h4>10</h4></div>
            <div className="item"><h4>11</h4></div>
            <div className="item"><h4>12</h4></div>
          </div>
        </div>
        <div className="container">
          <Banner
            title="Descomplique sua rotina com o Doutor Online"
          />
        </div>
    </section>
  );
}