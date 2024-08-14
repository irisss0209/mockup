document.addEventListener('DOMContentLoaded', function() {
    // Function to filter videos based on the search query
    function filterVideos() {
        // Get the search query
        var input = document.getElementById('search-bar');
        var filter = input.value.toUpperCase();
        var videoPreviews = document.getElementsByClassName('video-grid');
        
        // Loop through all the videopreviews, and the video title that does not match with the input will be hidden
        for (var i = 0; i < videoPreviews.length; i++) {
            var titleElement = videoPreviews[i].getElementsByClassName('video-title')[0];
            var titleText = titleElement.textContent || titleElement.innerText;
            if (titleText.toUpperCase().indexOf(filter) > -1) {
                videoPreviews[i].style.display = ""; // Show the video if it matches
            } else {
                videoPreviews[i].style.display = "none"; // Hide the video if it doesn't match the title
            }
        }
    }

    // Add event listener to the search bar to trigger the filterVideos function
    document.getElementById('search-bar').addEventListener('keyup', filterVideos);
});
