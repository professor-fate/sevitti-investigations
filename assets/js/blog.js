var blogToggleEl = document.querySelectorAll(".blog-toggle");
var blogEntry = document.querySelectorAll(".blog-entry")


blogToggleEl.forEach(toggle => {
    toggle.addEventListener('change', function handleChange(event) {
        event
        if(this.checked) {
            for(var i = 0; i < blogEntry.length; i+=1) {
                blogEntry[i].style.display = "none";
            }
            document.getElementById(toggle.value).style.display = "block";
            document.getElementById(toggle.value).style.width = "96%";
        } else {
            document.getElementById(toggle.value).style.width = "46%";
            for(var i = 0; i < blogEntry.length; i+=1) {
                blogEntry[i].style.display = "block";
            }
        }
    } )
})