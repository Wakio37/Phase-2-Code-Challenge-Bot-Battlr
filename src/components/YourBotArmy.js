import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({botArmy, removeFromArmy, deleteFromJsonServer}) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {botArmy ? botArmy.map((bot) => {
            return (
              <div key={bot.id}>
              <BotCard bot={bot} removeFromArmy={removeFromArmy} deleteFromJsonServer={deleteFromJsonServer}/>
              </div>
            )
          }) : null
          }
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
