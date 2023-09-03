import React from "react";
import BotSpecs from "./BotSpecs";

function BotCollection(props) {

  const {bots, addBotToArmy} = props

  console.log(addBotToArmy)
  
  // Your code here
  return (
    <div className="ui four column grid collection">
      <div className="row collection">
        {bots ? bots.map((bot) => {
          return (
            <div key={bot.id}>
              <BotSpecs bot={bot} addBotToArmy={addBotToArmy}/>
              </div>
          )
        }) : null
        }
      </div>
    </div>
  );
}

export default BotCollection;
