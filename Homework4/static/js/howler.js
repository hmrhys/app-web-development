// idea: dynamically create visual posts when user hits "Howl" to post
document.addEventListener('DOMContentLoaded', function () {
    const postForm = document.getElementById('postForm');
    const postText = document.getElementById('postText');
    const postsSection = document.getElementById('postsSection');

    // Function to create a new post element
    function createPostElement(postContent) {
        const postHead = document.createElement('div');
        postHead.classList.add('postHead');
        postHead.innerHTML = `
            <img src="#" alt="pfp">   
            <div class="userLine">
                <div><strong>User Name</strong></div>
                <div>@username</div>
            </div>
            <div class="attr">Just now</div>
        `;

        const postContentDiv = document.createElement('div');
        postContentDiv.classList.add('postContent');
        postContentDiv.textContent = postContent;

        const postSection = document.createElement('section');
        postSection.classList.add('content');
        postSection.appendChild(postHead);
        postSection.appendChild(postContentDiv);

        return postSection;
    }

    // Function to handle form submission
    postForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        const postContent = postText.value.trim();
        if (postContent === '') {
            alert('Please enter a post message.');
            return;
        }

        // Create a new post element
        const newPostElement = createPostElement(postContent);

        // Add the new post element to the page
        postsSection.insertBefore(newPostElement, postsSection.firstChild);

        // Clear the text area after posting
        postText.value = '';
    });
});