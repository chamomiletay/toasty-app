# ☁️ Toasty ☁️

**Record your days and track your mood all in one place. Toasty is intended to cultivate a cozy environment for journaling and keeping record of your day.**

## Sneak Peek

![](./public/img/demonstration.gif)


## Process Workflow
### 🍞 Initial Wireframes

![](public/img/wireframe_1.png) 

> 🌸 The initial design very closely reflects the final mvp. I wanted the user to be able to record the most important information (reflection, mood, date of entry).
> 
> I wanted to maintain a minimal design that feels inviting and encourages the user to journal their thoughts.

![](img/wireframe_2.png)

> Hoping to implement a working hydration tracker later down the line.

### 🍞 Initial Goals
- [x] User will be able to create, save, and edit new journal entries
- [x] User can remove old entries
- [x] A random affirmation will display at the bottom of the screen
- [x] The user will be able to input the date that the journal entry is made
- [x] The user will be able to log their mood for each entry

### 🍞 Stretch Goals

**Customization:**

- [ ] Allow user to select the theme of the type of quotes/affirmations that appear at the bottom of the screen
- [ ] Ability to change "theme" of interface based on button click. 
    - Got this one partially working (implemented feature, but eventListener won't work)
- [ ] Ability to upload images within each journal entry
- [ ] Ability to change journal prompt

**Logistics:**

- [ ] Include hydration tracking


### 🍞 Technical Approach
#### Technologies utilized:
- **Node.js** 
- **Mongoose**
- **DOM manipulation:** Event listeners, randomized elements
- **Express**
- **EJS**
- **MVC file structure**
- **RESTful route with full CRUD**
 

### 🍞 User stories
- As a user, I would like to have the ability to create a new journal entry at any time.
- As a user, I want to be able to have a list of all my existing entries displayed in an organized fashion.
- As a user, it is important for me to keep a record of my mood each day.
- As a user, I want to be able to reflect back on past journal entries and view them at any time.
-As a user, I would like to have the option to delete and declutter any journal entries I no longer wish to see/keep record of.

### 🍞 Challenges I Faced
This project got me out of my comfort zone, but in a good way. I was able to approach my code with a different perspsective. There were, however, a few setbacks during the course of the assignment. 
- **Time:** I struggled a bit with time management due to unforseen circumstances in my personal life, which caused me to urgently reassess my process and pivot to ensure my MVP was completed by the set deadline.

- **Rendering:** I initially intended to create a full frontend that would connect back to the backend server, but this caused a lot of headaches for me, particularly in getting data to populate on to my rendered HTML document. Once I took the time to reassess my process, I refactored my frontend to EJS views.  

- **Styling:** This was mostly due to time setbacks, but I struggled a bit with styling certain elements (modals, buttons, etc.) I was easily able to import my existing CSS into my EJS views, but I may consider looking into using Bootstrap for future projects.    
I also struggled intially with getting my layout.ejs file to read. This was solved by rearranging the order of my app.use(ejsLayouts). 

- **EJS:** Naturally, I struggled a bit with EJS since it was my first time really utilizing it. Once I was able to get the basics down, the rest followed through.

### ✨ Like what you see? Check out the app [*here!*](https://toaasty-app.herokuapp.com/journal/index)✨
    (https://toaasty-app.herokuapp.com/journal/index)