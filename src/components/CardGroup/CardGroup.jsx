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
      button={card.button && card.button}
      width={props.width}
      list={card.list && card.list}
      listName={card.list && card.listName}
      subtitle={card.subtitle && card.subtitle}
    />
  ));
  return (
    <section className="card-group gap-3  justify-content-center">
      {cards}
    </section>
  );
};

export default CardGroup;
