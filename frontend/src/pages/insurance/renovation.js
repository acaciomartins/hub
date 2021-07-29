import React, { useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import {
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators, Button,
} from "reactstrap";
import DefaultViewInsurance from "../../components/insurance/defaultViewInsurance";

function Renovation() {

  const items = [
    {
      image: '/assets/icons/insurance/car-shield.svg',
      title: 'contrate seguro auto daí e te ajudamos a pagar daqui',
      subtitle: 'Só no abastece-aí você tem ajuda para pagar até 100% do seu seguro auto e ainda acumula 500 km ;)'
    },{
      image: '/assets/icons/insurance/pig-coin.svg',
      title: 'é isso aí, te ajudamos a pagar seu seguro auto ;)',
      subtitle: 'Quanto mais você usar o app mais chances tem de acumular cupons e ter um seguro de graça.'
    },{
      image: '/assets/icons/insurance/car-shield.svg',
      title: 'contrate sem sair de casa e use na mesma hora',
      subtitle: 'Só no abastece-aí você contrata um seguro auto totalmete online e já pode sair usando sem pegadinhas.'
    }

  ]

  return (
      <DefaultViewInsurance>
        <div className="mt-5 mb-4 mx-5">
          <CarouselRenovation items={items}/>
        </div>
      </DefaultViewInsurance>
  );
}

export const CarouselRenovation = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
    const history = useHistory();

    const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item, index) => (
      <CarouselItem
          key={index}
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
      >
        <div className="body-carousel-item">

          <Col className="block">
            <div>
              <p className="h3 pb-2 text-center">
                <img height={110} src={item.image} alt="icone renovação" />{" "}
              </p>
            </div>

            <div>
              <h3 className="font-weight-bold text-white text-center pb-2">{item.title}</h3>
            </div>

            <div className="renovation-subtitle">
              {item.subtitle}
            </div>

          </Col>
        </div>
      </CarouselItem>
  ));

  const redirectToNew = () => {
      history.push("/new")
  }

  return (
      <>
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            interval={false}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} className="mt-3" />
          {slides}
        </Carousel>

        <Button className="renovation-yellow-button" onClick={() => redirectToNew()}>
          Simular seguro novo
        </Button>

        <Button className="renovation-transparent-button" onClick={() => console.log('Renovar')}>
          Renovar meu seguro
        </Button>
      </>


  );
};

CarouselRenovation.propTypes = {
  items: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        subtitle: PropTypes.string
      })
  ),
};

export default Renovation
