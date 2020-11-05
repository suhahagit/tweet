
const appendToPost = function(posts) {
    for(let post of posts){
        $('#posts').append(
            `<div class = 'post' data-id='${post.id}'>
            <h1 id = "post-header">${post.text}</h1>
            <p class = "comments">${PostComments(post)}</p>
            </div>`) 
    }
}

const PostComments = function(post) {
    let commentsStr = ""
    for(let comment of post.comments){
        commentsStr += `<p data-id ='${comment.id}'>${comment.text}</p>`
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