
//Tweeter Render Module

const appendToPost = function(posts) {
    for(let post of posts){
        $('#posts').append(
            `<div class = 'post' data-id='${post.id}'>
            <input type="text" placeholder="Add comment" id="commentInput">
            <button class = 'commentBtn'>Add</button>
            <button class = 'delete'>X</button>
            <h1 id = "post-header">${post.text}</h1>
            <p class = "comments">${PostComments(post)}</p>
            </div>`) 
    }
}

const PostComments = function(post) {
    let commentsStr = ""
    for(let comment of post.comments){
        commentsStr += `<p class = "comment" data-id ='${comment.id}'>${comment.text}
        <button class = 'delete-comment'>x</button>
        </p>`
    }
    return commentsStr
}

const Renderer = function(){

    const renderPosts = function(posts){
        $('#posts').empty()
        appendToPost(posts)
    }

    return{
        renderPosts: renderPosts
    }
}