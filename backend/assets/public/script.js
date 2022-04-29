//-------- ✧ BRAIN DUMP ✧ --------//
    //---- Frontend Content ----//
    // Functional buttons - make/edit/delete journal entries
    // Modals - provide user w/ instructions & tips
    // Forms- fill out journal prompts
    // Cozy interface - "customization"
    // Randomized affirmations on-screen
    // Mood tracker buttons
    // Stretch goal: hydration tracking buttons

    
    //---- Backend Content ----//
    // Axios - connect frontend to backend
    // Controller routes:
        // GET ("/journal") - display "index" page and list of journal entries
        // POST ("/journal") - create (post) new journal entry
        // PUT ("/journal/edit/:id") - update existing entry
        // DELETE ("/journal/:id") - delete existing entry
        // GET ("/new") - render page to create new entry
    //models - schema & seed data
//-------- ✧ END BRAIN DUMP ✧ --------//


//----------------- Set variables -----------------//
const openBtn = document.getElementById('open');
const modal_container = document.getElementById('modal-container');
const closeBtn = document.getElementById('close');
const deleteBtn = document.querySelectorAll('.remove-entry');
const newEntryBtn = document.getElementById('new-entry');

//-- empty value for selected journal id --//
let selectedItem = '';

const affirmations = [
    "I am still learning and finding my way. Mistakes are okay and expected.",
    "I wake up today with strength in my heart and clarity in my mind.",
    "My life is just beginning.",
    "I possess the qualities needed to be extremely successful.",
    "I am worthy of love, rest, and happiness."
]
//-- set variable to randomize array value displayed on screen --//
let random = arr => arr[Math.floor(Math.random()*arr.length)];
let ranAffirmation = document.querySelector('#affirmation');

    //--- display a randomized affirmation in corresponding container on page load--//
    ranAffirmation.innerHTML = `Daily affirmation: "${random(affirmations)}"`;


//-------------- MODAL FUNCTIONALITY --------------//
//--- open info modal on button click ---//
openBtn.addEventListener('click', ()=> {
    modal_container.classList.add('show');
});

//--- close info modal on button click ---//
closeBtn.addEventListener('click', ()=> {
    modal_container.classList.remove('show');
})