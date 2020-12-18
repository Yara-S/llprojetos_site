import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {
      PopupboxManager,
      PopupboxContainer
    } from 'react-popupbox';
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";

import defaultCardImage from "../../images/flash.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "../../images/circuit.svg";
import "react-popupbox/dist/react-popupbox.css"
import Fire from "../../images/fire.svg";
import Bolt from "../../images/flash.svg";
import Law from "../../images/gdpr.svg";
import Sun from "../../images/sun.svg";
import Water from "../../images/agua.svg";
import Consult from "../../images/brainstorming.svg";
import PopUpCard from "components/cards/TabCardGrid.js"
import Card  from 'react-bootstrap/Card'
import Luciano from "../../images/luciano.PNG" 

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card2 = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-primary-700 rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-primary-700 text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  }


  .textContainer {
    ${tw`mt-6 text-center w-48`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-primary-700`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default () => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const cards = [
    {
      imageSrc: Bolt,
      title: "Sistema de Proteção",
      description: "",
      descriptionCard: "descricao card 1"
    },
    { imageSrc: Sun, title: "Energia Solar" ,
      descriptionCard: "descricao card 2"},
    { imageSrc: Fire, title: "Combate à incendio" ,
      descriptionCard: "descricao card 3"},
    { imageSrc: Water, title: "Hidro sanitário" ,
      descriptionCard: "descricao card 4"},
    { imageSrc: Law, title: "Aprovação e Regularização nos orgãos competentes",
      descriptionCard: "descricao card 5" },
    { imageSrc: Consult, title: "Consultoria" ,
      descriptionCard: "descricao card 6"}

  ];

  var styleButton = {
  display: 'flex',
  justifyContent: 'center'
}


  const openPopupbox=card=> () =>  {
        const content = (
          <div>
            <Card >
                <Card.Img variant="top" src={Luciano}/>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                </Card.Body>
          </Card>
          </div>
        )
        PopupboxManager.open({ content })
      };






  return (
    <div>
    <Container>
      <ThreeColumnContainer>
        <Heading>Nosso Projetos e Serviços</Heading>
        {cards.map((card, i) => (

          <Column key={i}>
          
            <Card2>
              <button onClick={openPopupbox(card)} style={styleButton}>
              <span className="imageContainer">
              
                <img src={card.imageSrc || defaultCardImage} alt="" />
              
              </span>
              </button>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || ""}
                </p>
              </span>
             
            </Card2>
            
            
          </Column>
       
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
    <PopupboxContainer />
    </div>
  );
};
