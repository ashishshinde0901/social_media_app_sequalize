function loadArticles() {

    $.get('/api/posts',(posts)=>{

        for(let p of posts){
            $('#post-container').append(
                $(`
            <div class="card col-4 m-2" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${p.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
                    <p class="card-text">${p.body}</p>
                    <a href="#" class="card-link">Read</a>
                    <a href="#" class="card-link">Like</a>
                </div>
            </div>
          `)
            )
        }

    })

}