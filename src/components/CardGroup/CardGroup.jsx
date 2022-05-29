import Card from "./Card/Card";

const CardGroup = (props) => {
  console.log(props.cards, "cards recieved");
  const cards = props.cards.map((card) => (
    <Card
      key={card.id}
      img={card.img && card.img}
      cardTitle={card.cardTitle}
      cardParagraph={card.cardParagraph}
      strongFirst={card.strongFirst}
      strongLast={card.strongLast}
      afterStrong={card.afterStrong}
      button={card.button}
    />
  ));
  return <section className="card-group">{cards}</section>;
};

export default CardGroup;
