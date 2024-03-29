// Variables that point to selected DOM elements
const chat = document.getElementById('chat')
const form = document.getElementById('form')
const inputWrapper = document.getElementById('input-wrapper')
const nameInput = document.getElementById('name-input')
const input = document.getElementById('input')
const sendBtn = document.getElementById('send')

// If you need any global variables that you can use across different functions, declare them here:


// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    console.log("bot is answering")
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// Starts here
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Hello there, What's your name?", 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
  
}

// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.


//Set up answer for user here
const handleNameInput = (event) => {
  event.preventDefault()
  //Store value in a variable so we can access it later after clearing from input
  const name = nameInput.value;
  showMessage(name, 'user');
  nameInput.value = ''
  
setTimeout(() => typeTherapy(name), 1000)
}

const typeTherapy = (name) => {
showMessage(`What type of professional are you looking for today, ${name}?`, 'bot')
input.innerHTML= `
<button id="therapist" type='button'>Therapist</button>
<button id="psychiatrist" type='button'>Psychiatrist</button>
<button id="coupleCounsel" type='button>Couple's Counselor</button>
`

document
  .getElementById('therapist').addEventListener('click')

document
  .getElementById('psychiatrist').addEventListener('click')

document
  .getElementById('coupleCounsel').addEventListener('click')

}




inputWrapper.addEventListener('submit', handleNameInput)
inputWrapper.addEventListener('button', typeTherapy)


setTimeout(greetUser, 1000)