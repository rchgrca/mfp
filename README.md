# MyFitnessPal Coding Exercise

* Richard L. Garcia ( http://rchgrca.io/resume/ )
  * MyFitnessPal coding exercise:  http://rchgrca.io/mfp

* Requires:
  * node http server, e.g. https://github.com/itsananderson/node-web-server-cli

* Approach
  * code for mobile first
  * use functional css approach to demonstrate maintenance (immutability, composition)
    * use variables for repetitive classnames on repetitive elements
    * write as little CSS as possible
  * create single JSON structure to feed state object
  * mutate state for adding, removing food items, scrolling through different days
  * use table markup to display tabular data
  * getting working version first with no bugs, then refactor

* Features  
  * Required:
    * display a list of foods a user has eaten in a clear way, with the associated caloric value
    * display some calculation for the total nutrition values for the day
    * minimal support for adding and removing food items
  * Extra
    * responsive user-interface
    * different meals to segment food (breakfast, lunch, dinner, snacks)
    * handle more than 1 day
    * include other nutrition info (macro and micronutrients)
    * pie charts
    * jasmine unit tests for model
    * build system on CircleCi
