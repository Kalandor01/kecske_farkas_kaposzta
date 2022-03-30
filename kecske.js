window.onload = init;

function query(name) {
    return document.querySelector(name);
}

function query_all(name, arg) {
    document.querySelectorAll(name).forEach(elem => {arg(elem)});
}

var in_boat = []

function click_img(evt)
{
    in_boat.push(evt.target.src);
    console.log(in_boat);
    evt.target.style.display = "none";
    query("#csonak").innerHTML += `<img src="${evt.target.src}" alt="csonakban">`;
    let farkas = false;
    let kecske = false;
    let kaposzta = false;
    in_boat.forEach(animal => {
        if((animal.split("/kepek/")[1]).indexOf("farkas") != -1)
            farkas = true;
        else if((animal.split("/kepek/")[1]).indexOf("kecske") != -1)
            kecske = true;
        else if((animal.split("/kepek/")[1]).indexOf("kaposzta") != -1)
            kaposzta = true;
    });
    if(farkas && kecske)
        alert("A farkas és a kecske nem utazhatnak együtt!");
    if(kecske && kaposzta)
        alert("A kecske és a káposzta nem utazhatnak együtt!");
}

function kiemel(evt)
{
    evt.target.classList.add("kiemel");
}

function kiemel_out(evt)
{
    evt.target.classList.remove("kiemel");
}

function init()
{
    query("footer p").innerHTML = "Rohovszky Ákos";
    query_all("aside img", q=>q.onclick = click_img);
    query_all("aside img", q=>q.onmouseover = kiemel);
    query_all("aside img", q=>q.onmouseout = kiemel_out);
}