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


const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
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
      description: ""
    },
    { imageSrc: Sun, title: "Energia Solar" },
    { imageSrc: Fire, title: "Combate à incendio" },
    { imageSrc: Water, title: "Hidro sanitário" },
    { imageSrc: Law, title: "Aprovação e Regularização nos orgãos competentes" },
    { imageSrc: Consult, title: "Consultoria" }

  ];


  const openPopupbox=()=> {
    console.log("entrei");
        const content = (
          <div>
            <p className="quotes">Work like you don't need the money.</p>
            <p className="quotes">Dance like no one is watching.</p>
            <p className="quotes">And love like you've never been hurt.</p>
            <span className="quotes-from">― Mark Twain</span>
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
          <button onClick={openPopupbox} >
            <Card>
              
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || ""}
                </p>

              </span>
              
            </Card>
            </button>
            
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
    <PopupboxContainer />
    </div>
  );
};
