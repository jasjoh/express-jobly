# Jobly Server

## What is This?
This repo represents the back-end server for a bootcamp development project focused on learning Express.js. The app delivers JSON API interfaces supporting the ability to post and browser jobs with authentication on top. It was developed as part of my Full-Stack Software Engineering curriculum at the Rithm School bootcamp in partnership with a fellow cohort member. This specific app was built heavily leveraging test-driven development and test coverage is extensive.

[Link to repo for client illustrating usage of these APIs.](https://github.com/jasjoh/react-jobly)

## Key Learnings
- The challenges associated with shifting your approach to development when applying test-driven development
- The value of having extensive code-coverage (this project had **99%** line coverage)
- Leveragine JWTs as a means of communicating authentication  

## How to Run the Server
- Require PostgreSQL running
- Run `npm install` to install pre-requisites
- Run `psql -f jobly.sql` to initialize and seed the database
- Run `node server.js`

## How to Run the Tests
- Run `jest -i`
- To optionally see code-coverage results, add `--coverage`
