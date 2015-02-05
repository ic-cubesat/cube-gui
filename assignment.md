% CubeSat Web Development Workshop
% January 30th 2015

The goal of this assignment is to introduce you to the basics of web
development and version control, while attempting to simulate the
development workflow:

1. You are given a task
2. Understand the task and come up with an idea of implementing it
3. Handle the implementation details
4. Commit your changes and merge them with other changes applied while
   you were working

You will build part of the the visualisation page. This will
ultimately be responsible for displaying past and current orbits as
well as a gallery of images taken by our CubeSat.

Before starting, be sure to check your team number and work _only_ on
the corresponding assignment.

_We recommend that you use one laptop per team._

__Note__ During the assignment you may require various functions,
concepts etc. that have not been covered in the introductory
talk. This is _normal_ and happens extremely often during the
development process. You will find a good reference is
\url{http://www.w3schools.com/} which has a comprehensive set of
tutorials and refernces on many CSS, HTML, JavaScript (or server side)
programming topics for example:

* \url{http://www.w3schools.com/jsref/met_doc_getelementbyid.asp}
* \url{http://www.w3schools.com/html/html5_canvas.asp}

You should also be able to find a hoard of resources on online
programming communities such as StackOverflow
\url{http://stackoverflow.com/}.

\clearpage

## Team 1

### Getting started

Check out a local copy of the project from GitHub.  Use the log of
committed changes to see what has been happening with the
project. Look at a diff of the latest commit.

### HTML and CSS

The provided document (`index.html`) is not fully in HTML form. Add a
title to the page (`icy-cube` will do for now).

Use HTML and CSS to make the navbar (the top row) look like the
provided image (`expected.png`).

### JavaScript

Create a canvas HTML object. Set the background image to the provided
map of Earth. Create a `satelliteCoordinates` array to store the orbit
(x, y) coordinates. You can use the sin function (`Math.sin`) to
populate this array to create a nice, curved orbit. Can you make the
satellite (draw it as a larger circle) move along the orbit?

### Wrapping Up

Commit your changes. If you are lucky, the other team hasn't finished
their assignment so you can push your changes without merging
theirs. If not, you will have to merge their changes before hand.

\clearpage

## Team 2

### Getting started

Check out a local copy of the project from GitHub.  Use the log of
committed changes to see what has been happening with the
project. Look at a diff of the latest commit.


### HTML and CSS

The provided document (`index.html`) is not fully in HTML form. Add a
title to the page (`icy-cube` will do for now).

Use HTML and CSS to make the second row of the navbar (the one below
the timer) look like the provided image (`expected.png`).

### JavaScript

Use HTML, CSS and JavaScript to create the timer shown on the second
row of `expected.png`. This should _count up_ the time from the
mission start (use any default time).

### Wrapping Up Commit your changes.

If you are lucky, the other team
hasn't finished their assignment so you can push your changes without
merging theirs. If not, you will
have to merge their changes before hand.
