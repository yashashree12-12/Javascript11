const user = {
    username:"Julie",
    price: 999,
    
    welcomeMessage: function(){
        // 'this' refers to the current object that the function belongs to.
        // It is used here to access the 'username' property of the current object.
        console.log(`${this.username}, welcome to website`);
        // console.log(this)
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this);

function chai()
{
    // let username = "abhiruchi"
    // console.log(this.username); //undefined
    console.log(this); 
}

chai()