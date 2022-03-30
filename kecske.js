window.onload = init;

function query(name) {
    return document.querySelector(name);
}

function query_all(name, arg) {
    document.querySelectorAll(name).forEach(elem => {arg(elem)});
}

clicked_items = []

function click_img(evt)
{
    clicked_items.push(evt.target.src);
    console.log(clicked_items);
    evt.target.style.display = "none";
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
    query("article").innerHTML += '<img src="kepek/csonak.png" alt="csonak">';
    query_all("aside img", q=>q.onclick = click_img);
    query_all("aside img", q=>q.onmouseover = kiemel);
    query_all("aside img", q=>q.onmouseout = kiemel_out);
}