

function jumpToElement(element) {
    if (element != null && typeof element === 'string') {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(element).offset().top
        }, 500);
    } else {
        console.log('Error jumping to element.')
    }

}


$("#parent-button-info").on("click", () => {
    console.log('Clicked on about me...');
    var nav_button = $("#navigation-button");
    // jump to projects-section-box
    
    if (nav_button.text().includes('ABOUT ME')) {
        jumpToElement("#projects-section-box")
        // Hide projects box
        $("#projects-section-box").css("display", "none");
        // Show about me section
        $("#about-me-section-box").css("display", "flex")
        // Change text in navigation-button to Projects
        $("#navigation-button").html("PROJECTS")
    } else {
        jumpToElement("#about-me-section-box")
        // Show projects box
        $("#projects-section-box").css("display", "flex");
        // Hide about me section
        $("#about-me-section-box").css("display", "none")
        // Change text in navigation-button to INFO
        $("#navigation-button").html("ABOUT ME")
    }
})

