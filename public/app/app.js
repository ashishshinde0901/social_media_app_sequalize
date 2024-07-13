$(()=>{
  $('#navbar').load('./components/navbar.html',loginIfNeeded)
  $('#footer').load('./components/footer.html')
  $('#body').load('./components/all-articles.html',loadArticles)


})

function loginIfNeeded() {
  let currentUser = window.localStorage.user ? JSON.parse(window.localStorage.user) : null
  // console.log(currentUser)
  if(!currentUser){
    $.post('/api/users',{},(user)=>{
      if(user){
        console.log('logged in as ', user.username)
        window.localStorage.user = JSON.stringify(user)
      }
    })
  } else{
    console.log('resuming session as ', currentUser.username)
    console.log($('#nav-username').textContent)
    $('#nav-username').text(currentUser.username)
  }
}

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