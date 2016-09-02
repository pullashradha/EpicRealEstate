# Epic Real Estate

#### Team Project for Epicodus, 09/02/2016

#### By Shradha Pulla, Katie Tuttle, Rony Nasr & Stephanie Gurung

## Description

This program serves as a basic real estate app that allows users to favorite, buy, and sell houses. Houses can be viewed by price or by sqft, and detailed maps of nearby amenities are available for each house. Administrators have the ability to create, update, and delete existing houses.

## Setup/Installation Requirements

This program can only be accessed on a computer with Git and Atom software, and Node.js, Ember CLI, PhantomJS, npm, and bower globally installed.

* Clone this repository
* To set up package managers, type the following into the command line:
  * $ npm install
  * $ bower install
* To view the webpage, type the following:
  * $ ember server
  * Open Chrome and type in the following address: http://localhost:4200

## Known Bugs

No known bugs.

## Specifications

The program should... | Example Input | Example Output
----- | ----- | -----
Have CRUD functionality for all houses on admin page | --- | ---
Show all houses for sale & already sold on index | Houses: 7 | 5105 NE 22nd Ave, Portland, OR 97211; 2533 SE ...
Show locations of all houses on google maps, on index | --- | ---
Show house details modal when a house tile is clicked on | House: 5105 NE 22nd Ave | 5105 NE 22nd Ave, 2 beds * 1 bath * 1883 sqft ...
Show amenities (schools, grocery stores, hospitals) within 1000 meters of selected house on google maps, on the house modal | --- | ---
Allow user to favorite a house | Favorite Houses: 0, add 5105 NE 22nd Ave | Favorite Houses: 1
Show all favorite houses on favorite houses page | Favorite Houses: 2 | 5105 NE 22nd Ave, Portland, OR 97211; 2533 SE ...
Sort houses by price (ascending or descending) on index | --- | ---
Sort houses by sq. ft. (ascending or descending) on index | --- | ---
Allow user to buy a house if the user has a downpayment of at least 3% of the house price, and their salary is 20% of the house price | 5105 NE 22nd Ave, click "Buy House" | 5105 NE 22nd Ave: SOLD
Show all bought houses on houses bought page | Houses: 7, Houses Sold: 0 | Houses: 7, Houses Sold: 3
Calculate mortgage price on house-tile | 5105 NE 22nd Ave: $420,000 | 5105 NE 22nd Ave: Monthly Payment = $1,909.51

## Future Features

HTML | CSS | EmberJS
----- | ----- | -----
--- | --- | Create geocoder object to make Google Maps API read address instead of manual lat & lng inputs
--- | --- | Delete houses.json & create houses via admin page
--- | --- | Toggle new house/update house forms & map buttons
--- | --- | Create a service/computed property to change color of map house icon when the house tile is hovered on
--- | --- | Connect a real estate API so houses don't have to be hard-coded in
--- | --- | Create user object when a user buys a house

## Support and Contact Details

Contact Epicodus for support in running this program.

## Technologies Used

* HTML
* CSS
* Bootstrap
* Font Awesome
* EmberJS

## Further Reading and Useful Links

* Make use of the many generators for code, try `ember help generate` for more details
* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions:
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## Links

Git Hub Repository: https://github.com/pullashradha/EpicRealEstate

## License

*This software is licensed under the GPL license.*

Copyright (c) 2016 Shradha Pulla, Katie Tuttle, Rony Nasr & Stephanie Gurung
