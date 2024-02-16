const colorBtn = document.getElementById("color-button")
const addColorForm = document.querySelector("form")
const colorInput = document.getElementById("color-input")
const colorsSection = document.querySelector("section")

const getRandomColor = () => {
    console.log("hit getRandomColor")
    axios.get(`http://localhost:4545/api/color`).then(res => {
        console.log(res.data)
        alert(`Your color is ${res.data.name}`)
    })
}

const addNewColor = e => {
    e.preventDefault()

    const body = {
        newColor: colorInput.value
    }
    axios.post(`http://localhost:4545/api/colors`, body).then(res => {
        console.log(res.data)
        alert(`Your new color ${res.data.name} has been added!`)
    })
}

const editColor = e => {
    const id = e.target.id

    console.log(id)

    const body = {
        newColorName: document.getElementById(`input-${id}`).value
    }

    axios.put(`http://localhost:4545/api/colors/${id}`, body).then(res => {
        console.log(res.data)
    })
}
const getAllColorsAndShowThem = () => {
    axios.get(`http://localhost:4545/api/colors`).then(res => {
        console.log(res.data)
        res.data.forEach(colorObj => {
            const newDiv = document.createElement("div")
            newDiv.innerHTML = `
                    <h2>${colorObj.name}</h2>
                    <input id='input-${colorObj.id}'/>
                    <button id='${colorObj.id}'>Edit Color</button>
                `
            colorsSection.appendChild(newDiv)
            document
                .getElementById(`${colorObj.id}`)
                .addEventListener("click", editColor)
        })
    })
}

colorBtn.addEventListener("click", getRandomColor)
addColorForm.addEventListener("submit", addNewColor)

getAllColorsAndShowThem()
