const saveToFile =(filename, data)=> {
  fs.writeFile(filename, JSON.stringify(data, null, 2));
}
const loadFromFile =(filename)=> {
  const arr = fs.readFileSync(filename, "utf8");
  return JSON.parse(arr);
}

const usersList = loadFromFile("./data/users.json")
const validateUser = async (req, res, next) => {
    
    const auth = await usersList.find((user)=>user.username === req.headers.username && user.password === req.headers.password )
    if (auth){
        next();
    } else {
        res.sendStatus(401)
    }
}

export { 
    validateUser,
    saveToFile,
    loadFromFile,
    usersList
}
