import { useState } from "react";

export default function Players({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(isEditing ? false : true);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editPlayerName = <span className="player-name">{playerName}</span>;
  let buttonCaption = "EDIT";
  if (isEditing) {
    editPlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    buttonCaption = "SAVE";
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{buttonCaption}</button>
    </li>
  );
}
