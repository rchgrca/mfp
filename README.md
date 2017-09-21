# Calorie Counter Prototype

* Richard L. Garcia ( http://rchgrca.io/resume/ )
  * prototype URL (public):  http://rchgrca.io/mfp

* Requires:
  * node http server, e.g. https://github.com/itsananderson/node-web-server-cli

* Approach: "build a system"
  * create tests (sample)
  * create system for builds
  * build JSON model to serve as initial state
  * use table markup to display tabular data
  * code for mobile first
  * use functional css approach to demonstrate maintenance (immutability, composition)
    * use variables for repetitive classnames on repetitive elements
    * write as little CSS as possible for easier maintenance
  * use ES6 spread operators to easily mutate state object for adding, removing food items, scrolling through different days
  * getting working version first that fulfills requirements with no glaring bugs, then refactor
    * refactor: create custom React elements <MyElement foo={}/> (minimal)
    * refactor: integrate Redux (not done)

* Features  
  * Required:
    * display a list of foods a user has eaten in a clear way, with the associated caloric value
    * display some calculation for the total nutrition values for the day
    * minimal support for adding and removing food items
  * Extra
    * compatible on Firefox, Safari (IE not functional, no IE tools)
    * responsive user-interface
    * different meals to segment food (breakfast, lunch, dinner, snacks)
    * calculation of nutrition values per meal
    * handle more than 1 day
    * include other nutrition info (macro and micronutrients)
    * pie charts
    * jasmine unit tests for model
    * build system on CircleCi
