window.onload = init;

function query(name) {
    return document.querySelector(name);
}

function query_all_raw(name) {
    return document.querySelectorAll(name);
}

function query_all(name, arg) {
    document.querySelectorAll(name).forEach(elem => {arg(elem)});
}

function restart()
{
    //delete
    query_all("article img, aside img", q=>q.remove());
    //replace images
    query("#bal p").innerHTML = '<img src="kepek/kecske2.png" alt="kecske"><img src="kepek/kaposzta.png" alt="kaposzta"><img src="kepek/farkas.png" alt="farkas">';
    //init
    query_all("#bal img", q=>q.onclick = click_boat);
    query_all("#bal img", q=>q.onmouseover = kiemel);
    query_all("#bal img", q=>q.onmouseout = kiemel_out);
}

function click_boat(evt)
{
    let lost = false;
    let side = evt.path[2].id == "bal";
    console.log("\nCsonak: ");
    if(side)
        query("#csonak").innerHTML += `<img src="${evt.target.src}" alt="allat">`;
    else
        query("#csonak").innerHTML += `<img class="jobb" src="${evt.target.src}" alt="allat">`;
    let farkas = false;
    let kecske = false;
    let kaposzta = false;
    if(query_all_raw("#csonak img").length > 1)
    {
        alert("A csónakban egyszerre csak 1 állat utazhat! A csónak elsüllyedt! Vesztettél");
        lost = true;
    }
    if(!lost)
    {
        query_all_raw("#csonak img").forEach(animal => {
            let animal_name = (animal.src.split("/kepek/")[1]).split(".")[0];
            console.log(animal_name);
            if(animal_name.indexOf("farkas") != -1)
                farkas = true;
            else if(animal_name.indexOf("kecske") != -1)
                kecske = true;
            else if(animal_name.indexOf("kaposzta") != -1)
                kaposzta = true;
        });
        if(farkas && kecske)
        {
            alert("A farkas és a kecske nem lehetnek együtt! Vesztettél!");
            lost = true;
        }
        if(kecske && kaposzta)
        {
            alert("A kecske és a káposzta nem lehetnek együtt! Vesztettél!");
            lost = true;
        }
    }
    if(!lost)
    {
        evt.target.remove();
        farkas = false;
        kecske = false;
        kaposzta = false;
        if(side)
        {
            console.log("\nBall: ");
            animals = query_all_raw("#bal img");
        }
        else
        {
            console.log("\nJobb: ");
            animals = query_all_raw("#jobb img");
        }
        animals.forEach(animal => {
            let animal_name = (animal.src.split("/kepek/")[1]).split(".")[0];
            console.log(animal_name);
            if(animal_name.indexOf("farkas") != -1)
                farkas = true;
            else if(animal_name.indexOf("kecske") != -1)
                kecske = true;
            else if(animal_name.indexOf("kaposzta") != -1)
                kaposzta = true;
        });
        if(farkas && kecske)
        {
            alert("A farkas és a kecske nem lehetnek együtt! Vesztettél!");
            lost = true;
        }
        if(kecske && kaposzta)
        {
            alert("A kecske és a káposzta nem lehetnek együtt! Vesztettél!");
            lost = true;
        }
    }
    if(!lost)
    {
        query_all("article img", q=>q.onclick = click_szelso);
        query_all("article img", q=>q.onmouseover = kiemel);
        query_all("article img", q=>q.onmouseout = kiemel_out);
    }
    else
        restart();
}

function click_szelso(evt)
{
    console.log(query_all_raw("#jobb img"));
    if(query_all_raw("#jobb img").length < 2)
    {
        let lost = false;
        let side = (evt.target.className.indexOf("jobb") != -1);
        if(side)
        {
            console.log("\nJobb: ");
            query("#bal>p").innerHTML += `<img src="${evt.target.src}" alt="allat">`;
        }
        else
        {
            console.log("\nBal: ");
            query("#jobb>p").innerHTML += `<img src="${evt.target.src}" alt="allat">`;
        }
        if(0>1)
        {
            let farkas = false;
            let kecske = false;
            let kaposzta = false;
            let animals;
            if(side)
                animals = query_all_raw("#bal img");
            else
                animals = query_all_raw("#jobb img");
            animals.forEach(animal => {
                let animal_name = (animal.src.split("/kepek/")[1]).split(".")[0];
                console.log(animal_name);
                if(animal_name.indexOf("farkas") != -1)
                    farkas = true;
                else if(animal_name.indexOf("kecske") != -1)
                    kecske = true;
                else if(animal_name.indexOf("kaposzta") != -1)
                    kaposzta = true;
            });
            if(farkas && kecske)
            {
                alert("A farkas és a kecske nem lehetnek együtt! Vesztettél!");
                lost = true;
            }
            if(kecske && kaposzta)
            {
                alert("A kecske és a káposzta nem lehetnek együtt! Vesztettél!");
                lost = true;
            }
        }
        if(!lost)
        {
            evt.target.remove();
            if(side)
            {
                query_all("#bal img", q=>q.onclick = click_boat);
                query_all("#bal img", q=>q.onmouseover = kiemel);
                query_all("#bal img", q=>q.onmouseout = kiemel_out);
            }
            else
            {
                query_all("#jobb img", q=>q.onclick = click_boat);
                query_all("#jobb img", q=>q.onmouseover = kiemel);
                query_all("#jobb img", q=>q.onmouseout = kiemel_out);
            }
        }
        else
            restart();
    }
    else
    {
        alert("Nyertél!!!");
        alert("De atól még vesztettél!");
        restart();
    }
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
    query("footer p").style.textAlign = "center";
    query("footer p").style.fontSize = "20px";
    query("footer p").style.backgroundColor = "aqua";
    query_all("#bal img", q=>q.onclick = click_boat);
    query_all("#bal img", q=>q.onmouseover = kiemel);
    query_all("#bal img", q=>q.onmouseout = kiemel_out);
}