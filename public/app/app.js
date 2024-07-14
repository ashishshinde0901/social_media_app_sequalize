$(()=>{
  $('#navbar').load('./components/navbar.html',loginIfNeeded)
  $('#footer').load('./components/footer.html')
  $('#content').load('./components/all-articles.html')


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

