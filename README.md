# <img src="https://raw.githubusercontent.com/UWEC-ITC/segregatedFeesSite/master/public/favicon.ico" width="50" height="50"/> segregatedFeesSite [![Build Status](https://travis-ci.com/UWEC-ITC/segregatedFeesSite.svg?branch=master)](https://travis-ci.com/UWEC-ITC/segregatedFeesSite)


This is a site made with the intent of increasing awareness of the way the students' fees are being spent. More info can be found [here](https://www.uwec.edu/Busoff/studentfinancials/segfee.htm).

## Environments
- [Develop](http://dev-uwec-segregated-fees.s3-website.us-east-2.amazonaws.com/)

- [Production](http://uwec-segregated-fees.s3-website.us-east-2.amazonaws.com/)

- [Trello Board](https://trello.com/b/RViZEIIl/uwec-itc)

## How it works
The framework used is React.js to serve a single page site hosted in an AWS S3 bucket. Travis is responsible for running tests and deploying the project to the S3 bucket.

### Data
The data is provided via the Student Senate Finance Commission. This data is stored in this [repository](https://github.com/UWEC-ITC/segregatedFees-API) and accessed via the [API](https://3b6gdit4v0.execute-api.us-east-2.amazonaws.com/latest/v0)
