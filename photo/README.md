![photo-journal-logo]

[Photo Journal Website][photojournal]
[photojournal]: http://www.photojournal.club/

####Photo Journal is a website where you can tell your life story by sharing your pictures as well as follow other users and see their photo personal journals.  
####Sign up and document your life through photo journal entries.  
####Photo Journal is a personal project built by Mark Noizumi.  It's built using a Postgres/Rails/React stack, so it can be easily expanded.  Utilizing the ReactDOM allows only changed components to be re-rendered so it is highly efficient and stable.  

![splash page]

##Features

Photo Journal has a secure login system.
![login]

Each user has a profile page.
![profile]

They can edit their information and upload profile pictures, cover photos.
![edit]

Explore let's you see the latest photos from other users.
![explore]

Follow your favorites.
![follow]

The people you follow show up in your feed.
![feed]

Your photos and other users can be viewed on your profile page in photo mode.
![photos]

It can also be viewed in journal mode.
![journal]


## Project Design

Photo Journal was designed and built in two weeks.

A [proposal][proposal] was drafted to help provide an implementation timeline during the development process.

A [database schema][schema] was prepared alongside the design proposal.

[Wireframes][wireframes] were drafted to outline the basic design.  

![wireframe sample]


##Implementation

Photo Journal is a single-page application built using Rails and React/Redux.  

##Backend

###Heroku

Heroku is used as for hosting and managing the app.  

### Database

PostgreSQL RDBMS

###Dependencies

- BCrypt is used to salt the password and hash it.  

- Photo Journal utilizes Cloudinary for hosting and transforming photos, so frontend/backend.  Profile pics are transformed utilizing Clodinary's editing tools when they are uploaded and stored in the new form. Faces are identified utilizing these tools and then the photos are cropped in a circular fashion.  Cover photos are also cropped into longer images.  Regular photos are left in their original form.  


##Frontend  

###npm

NodeJS package manager was utilized to install all of the frontend node programs.  npm makes it easier to specify and link dependencies.

###Webpack

Webpack was utilized to bundle all of the assets, including Javascript, images, fonts, and CSS.  

###jQuery

jQuery was utilized to make AJAX requests to the Rails server.  

###React

All of the React components, store, actions, reducers, etc... are stored in the frontend directory.  


### React-Masonry-Component and React-Modal are utilized for displaying and uploading photos.  

### Babel

Babel was used to transpile the jsx into vanilla Javascript.  



## Future Implementations

Future implementations will build out the ability to edit and delete photos and journal entries.  


[photo-journal-logo]: http://res.cloudinary.com/dseky3p5e/image/upload/v1484119573/v8_c5rdfy.png
[splash page]: ./docs/images/Splash.png "Photo Journal splash page"
[login]: ./docs/images/login.png
[profile]: ./docs/images/profile.png
[edit]: ./docs/images/edit.png
[explore]: ./docs/images/explore.png
[follow]: ./docs/images/follow.png
[feed]: ./docs/images/feed.png
[photos]: ./docs/images/photos.png
[journal]: ./docs/images/journal.png
[proposal]: ./docs/README.md
[schema]: ./docs/schema.md
[wireframes]: ./docs/wireframes
[wireframe sample]: ./docs/wireframes/Splash.png
