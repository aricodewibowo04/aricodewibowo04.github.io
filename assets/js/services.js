// OPEN TRIP

function openPageOTrip(pageNameO, element, color) {
    // hide all elements with class tab_content by default
    var i , tabContentO, tabLinksO;
    tabContentO = document.getElementsByClassName("tab_contentO");
    for(i = 0; i < tabContentO.length; i++) {
        tabContentO[i].style.display = "none";
    }

    // remove the background-color of all tab_links button
    tabLinksO = document.getElementsByClassName("tab_linkO");
    for (i = 0; i < tabLinksO.length; i++) {
        tabLinksO[i].style.backgroundColor = "";
    }

    // show the specific content
    document.getElementById(pageNameO).style.display = "block";

    // add the specific color to the button used to open the tab content
    element.style.backgroundColor = color;
}

// PRIVATE TRIP

function openPagePTrip(pageNameP, element, color) {
    // hide all elements with class tab_content by default
    var i , tabContentP, tabLinksP;
    tabContentP = document.getElementsByClassName("tab_contentP");
    for(i = 0; i < tabContentP.length; i++) {
        tabContentP[i].style.display = "none";
    }

    // remove the background-color of all tab_links button
    tabLinksP = document.getElementsByClassName("tab_linkP");
    for (i = 0; i < tabLinksP.length; i++) {
        tabLinksP[i].style.backgroundColor = "";
    }

    // show the specific content
    document.getElementById(pageNameP).style.display = "block";

    // add the specific color to the button used to open the tab content
    element.style.backgroundColor = color;
}

document.getElementById("openDefaultO").click();
document.getElementById("openDefaultP").click();

