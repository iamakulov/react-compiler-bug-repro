import React from "react";
import { getCards } from "./getCards";
import MiniCarousel from "./MiniCarousel";
import { transformCards } from "./transformCards";

const MiniCarouselRedirect = (props) => {
  const cardList = getCards(props.terms, props.location);

  const cardListTransformed = transformCards(cardList);

  const miniCarouselProps = {
    ...props,
    cards: cardListTransformed,
    slug: props.locationSlug,
    onCardClick: (card) => {
      location.pathname = card.slug;
    },
    forceAnchorTag: false,
  };

  return <MiniCarousel {...miniCarouselProps} />;
};

export default MiniCarouselRedirect;
