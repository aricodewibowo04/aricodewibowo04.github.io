// OPEN TRIP

function openPageOTrip(pageName, element, color) {
    // hide all elements with class tab_content by default
    var i , tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tab_contentO");
    for(i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // remove the background-color of all tab_links button
    tabLinks = document.getElementsByClassName("tab_linkO");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].style.backgroundColor = "";
    }

    // show the specific content
    document.getElementById(pageName).style.display = "block";

    // add the specific color to the button used to open the tab content
    element.style.backgroundColor = color;
}

// PRIVATE TRIP

function openPagePTrip(pageName, element, color) {
    // hide all elements with class tab_content by default
    var i , tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tab_contentP");
    for(i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // remove the background-color of all tab_links button
    tabLinks = document.getElementsByClassName("tab_linkP");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].style.backgroundColor = "";
    }

    // show the specific content
    document.getElementById(pageName).style.display = "block";

    // add the specific color to the button used to open the tab content
    element.style.backgroundColor = color;
}

document.getElementById("openDefaultO").click();
document.getElementById("openDefaultP").click();

