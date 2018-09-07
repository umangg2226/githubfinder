//init github
const gitHub = new GitHub;

//init ui
const ui = new UI;
//search input
const searchUser = document.getElementById('searchUser');

//add event listener of search input

searchUser.addEventListener('keyup', (e) => {
    //get input text
    const userText = e.target.value;
    if (userText !== "") {
        //make http call
        gitHub.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    // show alert
                    ui.showAlert('user not found!', 'alert alert-danger');

                } else {
                    // show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })



        //console.log(userText);
    } else {
        //clear profile
        ui.clearProfile();
    }
})
