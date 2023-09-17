function openPage(evt, information) {
    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName('tab_content');
    for(i=0; i < tabContent.length;i++) {
        tabContent[i].style.display = "none";
    }

    tabLinks = document.getElementsByClassName('tab_links');
    for(i=0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace("active", "");
    }

    document.getElementById(information).style.display = "block";
    evt.currentTarget.className += " active";
}

function openPageP(eve, infoP) {
    var j, tabContentP, tabLinksP ;
    tabContentP = document.getElementsByClassName('tab_contentP');
    for(j=0; j<tabContentP.length; j++) {
        tabContentP[j].style.display="none";
    }

    tabLinksP = document.getElementsByClassName('tab_linksP');
    for(j=0; j < tabLinksP.length; j++) {
        tabLinksP[j].className = tabLinksP[j].className.replace("active", "");
    }
    

    document.getElementById(infoP).style.display = "block";
    eve.currentTarget.className +=" active"
}


// def open

document.getElementById('defaultOpen').click();
document.getElementById('defaultOpenP').click();