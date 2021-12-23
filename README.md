# The Rorschach Inkblot Test

## Project Links

- [GitHub Repo](https://git.generalassemb.ly/tiffanysfong/project-4)
- [Deployed Link of Project 4](https://tsfong.github.io/project4/#/)
- [Separate Deployed Link for Create Inkblot](https://tsfong.github.io/create-inkblot/)

## Project Description

I was interested in doing something artsy and thought-provoking so I decided to make an app dedicated to the Rorschach inkblot test. It's an interesting way to see how people percieve images and understand that visual perception and meaning is unique to each person. Each person will have different meanings based on their personality. The simple question "what do you see?" is prompted when they look at an image and users will write their response based on each image.

I've decided to combine a React JS front-end with a MongoDB backend so everyone can actually look at each others' responses and it can be a community/social discussion. I'll also have a page where vistors can create and save their own inkblot! How fun.

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [Wireframe](https://imgur.com/guZpe5O)
- [React Architecture](https://imgur.com/ibe42nV)


### MVP/PostMVP

#### MVP EXAMPLE
- Create React Framework
- Have a random inkblot generator
- Take user responses and save data
- Working "Create your Own" inkblot page
- Gallery/Meanings of Inkblots
- Working Nav Links


#### PostMVP EXAMPLE
- Beautify
- Add Animations
- Comment/Edit Features
- Community Features

## Components


| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Footer | This will render the header include the nav | 
| Home | This is where a random inkblot ill be generated and users can write a comment | 
| Gallery | This is where the user can see all the inkblot images/meanings |
| Create | This will be a page for users to create their own inkblot |
| About | This will be a page about the Rorschach test |
| NavBar | Nav Things


| Component | Priority | Estimated Time | Actual Time |
| --- | :---: | :---: |  :---: |
| Adding Text Form | H | 3hrs| 2hrs |
| Inkblot Test | H | 3hrs| 3hrs |
| Laying out App.JS | H | 3hrs | 2hrs |
| NavBar | H | 2hrs |  1hrs |
| Linking/Routes | H | 3hrs | 2hrs |
| Create an Inkblot | H | 8hrs |  12hrs |
| Gallery | H | 3hrs |  4hrs |
| About | H | 3hrs |  3hrs |
| Beautify and aesthetics | M | 5hrs | 10hrs |
| Total | H | 33hrs| 39hrs |

## Additional Libraries
N/A
## Code Snippet

I had a lot of fun this time trying out new things for CSS and design. Before I would DREAD it so I really wanted to give myself time during this project to see what the hype was about. That's when I discovered keyframes and my life was changed!

```.flicker {
  animation: shine 2s forwards, blink 3s 2s infinite;
}

.fast-flicker {
  animation: shine 2s forwards, blink 10s 1s infinite;
}
@keyframes blink {
  0%,
  22%,
  36%,
  75% {
    color: #ffe6ff;
    text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd,
      -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd,
      0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;
  }
  28%,
  33% {
    color: #ff65bd;
    text-shadow: none;
  }
  82%,
  97% {
    color: #ff2483;
    text-shadow: none;
  }
}

@keyframes shine {
  0% {
    color: #6b1839;
    text-shadow: none;
  }
  100% {
    color: #ffe6ff;
    text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #ff65bd,
      -0.2rem 0.1rem 1rem #ff65bd, 0.2rem 0.1rem 1rem #ff65bd,
      0 -0.5rem 2rem #ff2483, 0 0.5rem 3rem #ff2483;
  }
}```