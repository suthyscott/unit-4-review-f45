const colors = [
    {
        name: "blue",
        id: 1
    },
    {
        name: "green",
        id: 2
    }
]

let globalId = 3

module.exports = {
    getColor: (req, res) => {
        let randomIndex = Math.floor(Math.random() * colors.length)
        let randomColor = colors[randomIndex]

        res.status(200).send(randomColor)
    },
    addColor: (req, res) => {
        const { newColor } = req.body

        const newColorObj = {
            name: newColor,
            id: globalId
        }

        globalId++

        colors.push(newColorObj)

        res.status(200).send(newColorObj)
    }, 
    getAllColors: (req, res) => {
        res.status(200).send(colors)
    },
    editColor: (req, res)=> {
        const {id} = req.params
        const {newColorName} = req.body

        const index = colors.findIndex(col => col.id === +id)

        colors[index].name = newColorName

        res.status(200).send(colors[index])
    }
}
