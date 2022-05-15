const productsCart = [
    {
        id: 1,
        name: "Uva Crimson",
        price: 44.99,
    },

    {
        id: 2,
        name: "Vinho Canção",
        price: 17.98,
    },

    {
        id: 3,
        name: "Água de coco",
        price: 8.99,
    },

    {
        id: 4,
        name: "Mamão",
        price: 9.98,
    },

    {
        id: 5,
        name: "Água Tônica",
        price: 17.98,
    }
]
const body    = document.querySelector("body")
const main    = document.createElement("main")
const ul      = document.createElement("ul")
const section = document.createElement("section")

body.appendChild(main)
main.appendChild(ul)
main.appendChild(section)

function addList(productsCart){

    for(let i = 0; i < productsCart.length; i++){

        const li    = document.createElement("li")
        const name  = document.createElement("p")
        const preco = document.createElement("p")
        
        name.innerText  = productsCart[i].name
        preco.innerText = `R$ ${productsCart[i].price}`

        li.appendChild(name)
        li.appendChild(preco)
        ul.appendChild(li)

    }
}

function resultadoSoma(productsCart){

    let result = 0

    for(let i = 0; i < productsCart.length; i++){
        result += productsCart[i].price
    }

    const total = document.createElement("p")
    const button  = document.createElement("button")

    total.innerText = `Total R$ ${result}`
    button.innerText = "Finalizar"

    section.appendChild(total)
    section.appendChild(button)

}

addList(productsCart)
resultadoSoma(productsCart)


