# in_season

a [Sails](http://sailsjs.org) application

In Season is a website that allows you to look up which fruits and vegetables are in season, find recipes with them and locate your nearest farmer's market. In Season was built using MongoDB, AngularJS and Sails. It is powered by two APIs: Big Oven Recipes and USDA Farmer's Markets API.

Challenges: Making calls to the APIs was a breeze while on localhost.  I had both APIs in the front end.  Once I deployed to heroku, while there were no problems making calls to the Big Oven API, calls could not be made to the USDA Farmer's Market Directory API.  I learned that that was because the USDA API does not allow $http calls from an https site (which heroku is).  So I had to rework my code to make the USDA API call from the back end (and route it to the front end) rather than the front end.