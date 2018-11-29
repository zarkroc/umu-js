$(document).ready(generateMenu);



/**
 * Genereate the menu.
 */
function generateMenu() {
    var receptmeny = document.getElementById("receptmeny");
    var posts = document.getElementsByClassName("post");
    let list = document.createElement("ul");
    // Go through all posts.
    for (let index = 0; index < posts.length; index++) {
        // Set the title to what is inside the h4 tag.
        var title = posts[index].getElementsByTagName("h4")[0];
        var listItem = document.createElement("li"); //Create a list item.
        var anchorTag = document.createElement("a"); //Create a link.
        // Set an id so we can link! 
        posts[index].id = index; 
        anchorTag.href=`#${index}`; //Set the link to an id.
        anchorTag.innerHTML = title.innerHTML; //Set the text to display for the link.
        listItem.appendChild(anchorTag); //Add link to list item.
        list.appendChild(listItem); //add list item to list.
        // Hide all but the first. Set display to none as to remove them.
        // Setting visibility would still have them take up the space.
        if (index > 0)
        {
            posts[index].style.display = "none";
        }

        // Listen for click on link.
        anchorTag.addEventListener("click", function(e) {
            var link = e.target.href;
            hideAll(posts); //Hide the rest.
            //Figure out what to unhide.
            var toUnHide = link.substring(link.indexOf("#") + 1); 
            //unhide it. 
            posts[toUnHide].style.display = "block";
        });
    }
    // Add the list to the container.
    receptmeny.getElementsByClassName("contentarea")[0].appendChild(list);
}
/**
 * Hide all elements that are received in parameter.
 * @param {} data 
 */
function hideAll(data) {
    for (let index = 0; index < data.length; index++) {
        data[index].style.display = "none";
    }
}