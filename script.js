$(document).ready(function () {
    // When the button is clicked
    $("#showPhotoButton").click(function () {
        // Show the modal
        $("#photoModal").css("display", "block");

        // Automatically dismiss the modal after 3 seconds
        setTimeout(function () {
            $("#photoModal").css("display", "none");
        }, 3000);
    });

    // When the user clicks the close button or outside of the modal, close it
    $(".close, .modal").click(function () {
        $("#photoModal").css("display", "none");
    });

    // Prevent clicks within the modal from closing it
    $(".modal-content").click(function (e) {
        e.stopPropagation();
    });
});
