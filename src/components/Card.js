const Card = ({ card, handleClick }) => {
  return (
    <div
      id={card.id}
      className="card"
      onClick={handleClick.bind(this, card.id)}
    >
      <img src={card.img} alt={card.text} />
      <p>{card.text}</p>
    </div>
  );
};

export default Card;
