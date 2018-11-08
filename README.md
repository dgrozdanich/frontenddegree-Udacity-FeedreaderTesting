# Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.


# To Run this Project

1) Clone or download this repository 
2) Rune the index.html file
3) All tests will pass, if you want change variables or alter tests open 
/jasmine/spec/feedreader.js for tests
and 
/js/app.js for variables. 

## The tests :

## A) RSS Feeds Test Suite
Two tests.
1. Loops through each feed in the allFeeds object and ensures there is a URL defined and that the URL is not empty
2. Loops through each feed in the allFeeds object and ensures there is a name defined and that the name is not empty

## B) The Menu Test Suite
Two Tests
1. Ensures that the menu element is hidden by default. 
2. Ensures that the menu element is shown when clicked and when clicked again goes 
back to being hidden

## C) Initial Entries Test Suite
1. Makes sure that the loadFeed function is called and complets its work.
Checks that there is at least a single .entry element withint the .feed container.

## D) New Feed Selection Test Suite
1. Ensures when a new feed is loaded by the loadFeed function that the content actually changes. 