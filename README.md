# MyFitnessPal Coding Exercise

* Richard L. Garcia ( http://rchgrca.io/resume/ )
  * MyFitnessPal coding exercise:  http://rchgrca.io/mfp

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
    * responsive user-interface
    * different meals to segment food (breakfast, lunch, dinner, snacks)
    * calculation of nutrition values per meal
    * handle more than 1 day
    * include other nutrition info (macro and micronutrients)
    * pie charts
    * jasmine unit tests for model
    * build system on CircleCi

* Analytics
  * Page load performance
    * mfp web: https://www.webpagetest.org/result/170726_R5_11PH/
    * mfp mobile: https://www.webpagetest.org/result/170726_Z1_11QF/
    * myfitnesspal web: https://www.webpagetest.org/result/170726_M0_1P3M/
    * myfitnesspal mobile: https://www.webpagetest.org/result/170726_7M_1P2C/  (huge bg image)
  * CSS stat
    * mfp http://cssstats.com/stats?link=http%3A%2F%2Frchgrca.io%2Fmfp%2Fcss%2Findex.css (low specificity)
