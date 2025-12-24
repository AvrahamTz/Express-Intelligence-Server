const agentsList = loadFromFile("./data/agents.json")
const getAllAgents = async (req, res) => {
    await res.send (agentsList)
}
const agentByID = async (req, res) => {
    res.send(agentsList.filter((agent)=>agent.id === req.params.id))
}

export{
    getAllAgents,
    agentByID
}