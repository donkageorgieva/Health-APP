import Card from "./Card/Card";

const CardGroup = (props) => {
  const cards = props.cards.map((card) => (
    <Card
      key={card.cardTitle}
      img={card.img && card.img}
      cardTitle={card.cardTitle}
      onClick={props.onClick}
      cardParagraph={card.cardParagraph}
      strongFirst={card.strongFirst}
      strongLast={card.strongLast}
      afterStrong={card.afterStrong}
      button={card.button && card.button}
      width={props.width}
      subtitle={card.subtitle && card.subtitle}
      lists={card.lists && card.lists}
    />
  ));
  return (
    <section className="card-group gap-3  justify-content-center py-2">
      {cards}
    </section>
  );
};

export default CardGroup;
