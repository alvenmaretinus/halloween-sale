function openTab(e, tabName) {

    var i, tabcontent, tablinks;


    tabcontent = document.getElementsByClassName("items__tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].className = tabcontent[i].className.replace(" items__tabcontent--state-active", "");
    }


    tablinks = document.getElementsByClassName("items__tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" items__tablink--state-active", "");
    }


    document.getElementById(tabName).className += " items__tabcontent--state-active";
    document.getElementById(tabName+"tab").className += " items__tablink--state-active";
}