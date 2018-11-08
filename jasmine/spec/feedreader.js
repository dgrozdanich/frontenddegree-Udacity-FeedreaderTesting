/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it("url defined", function(){
            allFeeds.forEach((feed) => {
    //Loops through all the feed items to check if url is defined and not empty
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
         });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it("name defined", function(){
            allFeeds.forEach((feed) => {
    //Loops through all the feed items to check if name is defined and not empty
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
         });
    });


    describe('the menu', function() {
        /* A test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         var body = document.body;
         var menuLink = $(".menu-icon-link");
         //defines the document body and looks for the menu icon

         it('default menu hidden', function() {
            expect(body.classList.contains('menu-hidden'));
         });
         //checks to make sure the class menu-hidden is added to the body by default

         /* A test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('menu visibility', function() {
            menuLink.click();
            expect(body.className).not.toContain('menu-hidden');
            menuLink.click();
            expect(body.className).toContain('menu-hidden');
          });
        // checks that when you click the menu icon, the menu gets hidden.
        // when you click again the menu gets hidden

    });

    
    describe('Initial Entries', function() {
        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        
        var container = $('.feed'); 

        beforeEach(function(done) {
          loadFeed(0, function() {
            console.log('loadfeed is done');
            var startingFeed = $('.feed');

            loadFeed(1, done);
        });
          //makes sure the loadfeed funtion is loaded before it checks for the entry
        });

        it("single .entry element in .feed container", function() {
                 var entries = container.find('.entry');
                 expect(entries.length).toBeGreaterThan(0);
        });

    });

    describe('New Feed Selection', function() {
        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
      var startingFeed = document.querySelector(".feed").innerHTML;


      beforeEach(function(done) {
        loadFeed(0, done);
        });

      //loads the loadfeed function before checking to make sure 
      // if there is a change to the feed, the data actually changes 

      it("loadfeed content changes", function() {
        var newFeed = document.querySelector(".feed").innerHTML;
        expect(startingFeed).not.toBe(newFeed);

         });

      });     
   });
