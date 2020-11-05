
//Tweeter Controller

const tweeter = Tweeter()
const renderer = Renderer()

// The Twit button 
const post = function (){
    let post = $('#input').val()
    tweeter.addPost(post)
    renderer.renderPosts(tweeter.getPosts())
}

// The Delete Post button
const deletePostButton = function(){
    tweeter.removePost($(this).closest(".post").data().id)
    renderer.renderPosts(tweeter.getPosts())
}

// The Comment button
const commentButton = function(){
    const postID = $(this).closest(".post").data().id
    const txt = $(this).closest('#posts').find('#commentInput').val()
    tweeter.addComment(txt,postID)
    renderer.renderPosts(tweeter.getPosts())
}

// The X next to each comment 
const xCommentButton = function(){
    const postID = $(this).closest(".post").data().id
    const commentID = $(this).closest(".comment").data().id
    tweeter.removeComment(postID, commentID)
    renderer.renderPosts(tweeter.getPosts())
}

$("body").on("click", ".delete", deletePostButton)
$("body").on("click", ".commentBtn", commentButton)
$("body").on("click", ".delete-comment", xCommentButton)

renderer.renderPosts(tweeter.getPosts())