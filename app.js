// recuperer le parent.
const container=document.getElementById("container");

// creer le dataset(Object).
// augmenter id(id automatique).
let id=0
function incrementId(){
    id++
    return id
}

const Users=[
    {
        id:incrementId(),
        image:'images\\pic-1.jpg',
        name: `username ${id}`,
        poste:`Poste ${id}`
    },
    {
        id:incrementId(),
        image:'images\\pic.jpg',
        name: `username ${id}`,
        poste:`Poste ${id}`
    },
    {
        id:incrementId(),
        image:'images\\pic-2.jpg',
        name: `username ${id}`,
        poste:`Poste ${id}`
    },
    {
        id:incrementId(),
        image:'images\\pic-7.jpg',
        name: `username ${id}`,
        poste:`Poste ${id}`
    },
    {
        id:incrementId(),
        image:'images\\pic-5.jpg',
        name: `username ${id}`,
        poste:`Poste ${id}`
    }
]
console.log(Users)

// Creer des elements html.

Users.forEach(user=>{
    const divCarte=document.createElement("div")
    divCarte.classList.add('carte')

    const imageCarte=document.createElement('img')
    imageCarte.classList.add('carte-img')
    imageCarte.src=user.image
    divCarte.appendChild(imageCarte)

    const nameCarte=document.createElement('h2')
    nameCarte.classList.add('carte-name')
    nameCarte.textContent=user.name
    divCarte.appendChild(nameCarte)

    const postCarte=document.createElement('p')
    postCarte.classList.add('carte-desc')
    postCarte.innerHTML=user.poste
    divCarte.appendChild(postCarte)



    container.appendChild(divCarte)
})




