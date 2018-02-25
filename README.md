# Reactcats

### Overview

Reactcats is an React app made as part of the technical test for MVF. The goal was to implement the stories in userStories.md to build a photo feed gallery.

Technologies used:
- React
- Jest
- Enzyme

### User instructions

- Check if you have node installed by running `node -v`. If not, please install [node](https://nodejs.org/en/download/)

- Clone the repo
`git clone git@bitbucket.org:Xin00163/reactcats.git`

- Install dependencies by running `npm install`

- To launch the app, run `npm start` then navigate to `http://localhost:3000`

- Use `npm test` to run the test

### My Approach
I created a PhotoContainer component, which includes the user avatar, user name, image, image description and like counter with icon.

The first problem I faced was to figure out how to test. It seemed to me that testing user avatar, user name, image, image description all appear at the right place is UI test. While researching I came across Jest's snapshot and it seemed like a good way to do UI tests. I found [Jest's documentation](https://facebook.github.io/jest/docs/en/snapshot-testing.html) and the suggested reading material very helpful. In terms of checking how users change the like state and like count, I didn't use Snapshot because it's more to do with changing the DOM. It makes more sense to use Enzyme.

The second problem was to import the images. I wanted to import the entire folder but I couldn't do it without using an index.js file to import it and export it again.

The third problem was to do with handling static assets. I came across the following error "jest: Test suite failed to run, SyntaxError: Unexpected token import" and it turned out that Jest does not understand extension like png or jpeg. After checking StackOverflow and the official doc, I added the configuration and a transformer file to return the basename of a file (such that require('logo.jpg'); returns 'logo').

Lastly, as this is my second time using React, the idea of using the constructor to initialize state and calling setState() outside constructor all seem a bit new to me. Luckily, [React's documentation](https://reactjs.org/docs/react-component.html) has some good info.


### Screenshots
React Cats App:
![Reactcats1](https://i.imgur.com/mH751zZ.png)
![Reactcats2](https://i.imgur.com/F2fn0eN.png)

Tests passing:
![Tests](https://i.imgur.com/AvKsep7.png)

### Future Plans
- Complete bonus user stories
- Use mock data and sinon spy
