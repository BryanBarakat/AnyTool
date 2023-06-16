import React, { useEffect, useState } from "react";
import "./Content.css";
import { suitsQuote, setValSuits } from "../../utils/Suits";
import { vikingsQuote, setValVikings } from "../../utils/Vikings";
import { officeQuotes, setValOffice } from "../../utils/TheOffice";
import { friendsQuote, setValBreak } from "../../utils/Friends";
import { breakingQuotes, setVal } from "../../utils/BreakingBad";
import axios from "axios";

export const Content = () => {
  //General states
  const [Quote, setQuote] = useState("");
  const [outOfQuotes, setOutOfQuotes] = useState(false);
  const [itemSelected, setItemSelected] = useState("suitsQuotes");
  const [changed, setchanged] = useState(false);

  //Tv Show array states
  const [suitsQuotes, setsuitsQuotes] = useState(true);
  const [vikingsQuotes, setvikingsQuotes] = useState(false);
  const [theOfficeQuotes, settheOfficeQuotes] = useState(false);
  const [friendsQuotes, setfriendsQuotes] = useState(false);
  const [breakingBadQuotes, setbreakingBadQuotes] = useState(false);

  const moveOptions = () => {
    if (!changed) {
      setchanged(true);
      document.getElementById("options").classList.add("move");
    }
  };

  function fetchAdvice() {
    moveOptions();
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        setQuote(response.data.slip.advice);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const Generator = () => {
    moveOptions();
    if (suitsQuotes && suitsQuote.length > 0) {
      setOutOfQuotes(false);
      let randomQuote =
        suitsQuote[Math.floor(Math.random() * suitsQuote.length)];
      setQuote(randomQuote);
      let newArr = suitsQuote.slice();
      newArr.splice(newArr.indexOf(randomQuote), 1);
      setValSuits(newArr);
    } else if (vikingsQuotes && vikingsQuote.length > 0) {
      setOutOfQuotes(false);
      let randomQuote =
        vikingsQuote[Math.floor(Math.random() * vikingsQuote.length)];
      setQuote(randomQuote);
      let newArr = vikingsQuote.slice();
      newArr.splice(newArr.indexOf(randomQuote), 1);
      setValVikings(newArr);
    } else if (friendsQuotes && friendsQuote.length > 0) {
      setOutOfQuotes(false);
      let randomQuote =
        friendsQuote[Math.floor(Math.random() * friendsQuote.length)];
      setQuote(randomQuote);
      let newArr = friendsQuote.slice();
      newArr.splice(newArr.indexOf(randomQuote), 1);
      setValBreak(newArr);
    } else if (breakingBadQuotes && breakingQuotes.length > 0) {
      setOutOfQuotes(false);
      let randomQuote =
        breakingQuotes[Math.floor(Math.random() * breakingQuotes.length)];
      setQuote(randomQuote);
      let newArr = breakingQuotes.slice();
      newArr.splice(newArr.indexOf(randomQuote), 1);
      setVal(newArr);
    } else if (theOfficeQuotes && officeQuotes.length > 0) {
      setOutOfQuotes(false);
      let randomQuote =
        officeQuotes[Math.floor(Math.random() * officeQuotes.length)];
      setQuote(randomQuote);
      let newArr = officeQuotes.slice();
      newArr.splice(newArr.indexOf(randomQuote), 1);
      setValOffice(newArr);
    } else {
      setQuote("");
      setOutOfQuotes(true);
    }
  };

  useEffect(() => {
    switch (itemSelected) {
      case "suitsQuotes":
        setsuitsQuotes(true);
        setvikingsQuotes(false);
        settheOfficeQuotes(false);
        setfriendsQuotes(false);
        setbreakingBadQuotes(false);
        break;
      case "vikingsQuotes":
        setsuitsQuotes(false);
        setvikingsQuotes(true);
        settheOfficeQuotes(false);
        setfriendsQuotes(false);
        setbreakingBadQuotes(false);
        break;
      case "theOfficeQuotes":
        setsuitsQuotes(false);
        setvikingsQuotes(false);
        settheOfficeQuotes(true);
        setfriendsQuotes(false);
        setbreakingBadQuotes(false);
        break;
      case "friendsQuotes":
        setsuitsQuotes(false);
        setvikingsQuotes(false);
        settheOfficeQuotes(false);
        setfriendsQuotes(true);
        setbreakingBadQuotes(false);
        break;
      case "breakingBadQuotes":
        setsuitsQuotes(false);
        setvikingsQuotes(false);
        settheOfficeQuotes(false);
        setfriendsQuotes(false);
        setbreakingBadQuotes(true);
        break;
    }
  }, [itemSelected]);

  return (
    <div className="content-container">
      <div className="categories">
        <div id="options" className="options">
          <ul>
            <li>
              {" "}
              <select
                onChange={(e) => {
                  setItemSelected(e.target.value);
                }}
                value={itemSelected}
              >
                <option value="suitsQuotes">Suits</option>
                <option value="vikingsQuotes">Vikings</option>
                <option value="breakingBadQuotes">Breaking Bad</option>
                <option value="friendsQuotes">Friends</option>
                <option value="theOfficeQuotes">The Office</option>
              </select>
            </li>
            <li>
              <button className="gen-movie" onClick={() => Generator()}>
                Generate Movie Quote
              </button>
            </li>
            <li>
              {" "}
              <button onClick={fetchAdvice}>Generate Random Quote</button>
            </li>
          </ul>
        </div>
        <div className="quote-display">
          {Quote && !outOfQuotes && <h2>{Quote}</h2>}
          {Quote && outOfQuotes && <h2>{Quote}</h2>}
          {!Quote && outOfQuotes && <h3>Out of Quotes</h3>}
        </div>
      </div>
    </div>
  );
};
