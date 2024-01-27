const sections = document.querySelectorAll("section")
const navlinks = document.querySelectorAll("header nav a")
const menu = document.querySelector("#menu i")
const navbar = document.querySelector(".navbar")

menu.onclick = ()=>{
    menu.classList.toggle("bx-x")
    navbar.classList.toggle("active")
}

window.onscroll = ()=>{
    sections.forEach(sec=>{
        const top =window.scrollY
        const offset = sec.offsetTop -150
        const height = sec.offsetHeight
        const id = sec.getAttribute("id")
        console.log(id)
        if(top>=offset && top<offset+height){
            navlinks.forEach(nav=>{
                nav.classList.remove("active")
                document.querySelector("header nav a[href*="+id+"]").classList.add("active")
            })
        }
    })
    const header = document.querySelector(".header")
    header.classList.toggle("sticky",window.scrollY>100)
    menu.classList.remove("bx-x")
    navbar.classList.remove("active")
}

const darkicon = document.querySelector("#darkside-moon i")

darkicon.onclick = ()=>{
    darkicon.classList.toggle("bx-sun")
    document.body.classList.toggle("dark-mode")
}