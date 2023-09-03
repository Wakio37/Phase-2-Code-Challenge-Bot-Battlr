import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one

  const [bots, setBots] = React.useState([]) 
  const [botArmy, setBotArmy] = React.useState([])
  const [deleted, setDeleted] = React.useState([false])

  const addBotToArmy = (bot) => {
    // bot army state should be unique
    if (!botArmy.includes(bot)) {
      setBotArmy([...botArmy, bot])
    }
  }

  const removeFromArmy =(bot)=>{
    setBotArmy(botArmy.filter((botArmyBot)=>botArmyBot.id !== bot.id))
  }

  React.useEffect(() => {
    fetch("http://localhost:8002/bots")
    .then((r) => r.json())
    .then((botsArray) => {
      console.log(botsArray)
      setBots(botsArray)
    })
    .catch((error) => {
      console.error(error)
    })
  }, [deleted])

  const deleteFromJsonServer=(bot)=>{
    fetch(`http://localhost:8002/bots/${bot.id}`, {
      method: "DELETE",
    })
    .then((r) => r.json())
    .then((botsArray) => {
      console.log(botsArray)
      setDeleted(!deleted)
    })
    .catch((error) => {
      console.error(error)
    })

  }

  return (
    <div>
      <YourBotArmy botArmy={botArmy} removeFromArmy={removeFromArmy} deleteFromJsonServer={deleteFromJsonServer}/>
      <BotCollection bots={bots} addBotToArmy={addBotToArmy}/>
    </div>
  )
}

export default BotsPage;
