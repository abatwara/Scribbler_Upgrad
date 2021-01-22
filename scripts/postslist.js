// Funtion to remove posts from the postslist using post id
function removePost(post) {
        const delelePost = document.getElementById(post);
        delelePost.parentNode.removeChild(delelePost);
};

//Sets dynamic id value to the delete modal
$(document).ready(function () {
	$('#deletePostModal').on('show.bs.modal', function (event) { // id of the modal with event
	  var button = $(event.relatedTarget); // Button that triggered the modal
	  var postId = button.data('postid'); // Extract info from data-postid attributes
	  
	  // Update the modal's content.
	  var modal = $(this)

	  // Pass the post id to modal's 'Yes' button for further processing
	  modal.find('button.btn-danger').val(postId);
	})
});

//Method to open the perticular page based on id
function openPost(post){
	var parentDiv = post.parentNode.parentNode;
	const postId = parentDiv.getAttribute("id") 
	setPostDetails(postId);
	window.location="../html/post.html?postId=" + postId;
};

//Method to set post details to the session storage so new page can get the same from it
function setPostDetails(postId){
	const postAuthor = document.getElementById(postId).querySelector(".author-name p").innerHTML;
	const postTitle = document.getElementById(postId).querySelector(".post-preview-title p").innerHTML;
	const postContent = document.getElementById(postId).querySelector(".post-preview-content").innerHTML;
	sessionStorage.setItem('postId', postId);
	sessionStorage.setItem('author_' + postId, postAuthor);
	sessionStorage.setItem('title_' + postId, postTitle);
	sessionStorage.setItem('content_' + postId, postContent);
};