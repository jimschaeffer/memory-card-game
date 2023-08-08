const Scoreboard = ({ currentScore, highScore }) => {
  return (
    <div className="scoreboard">
      <div className="scoreboard-section">
        <p className="label">Current Score:</p>
        <p className="score">{currentScore}</p>
      </div>
      <div className="scoreboard-section">
        <p className="label">High Score:</p>
        <p className="score">{highScore}</p>
      </div>
    </div>
  );
};

export default Scoreboard;
