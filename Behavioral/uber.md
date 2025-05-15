# Behavioral Questions

1. Tell me about a time you had to manage a difficult situation with a colleague. How did you handle it?

Answer 1.

During my work tennure at Walmart, I had a conflict with senior engineer, he was hired based on his company aquistion at Walmart along with his entire team and he joined as a staff engineer.
He was working on a project and I was asked to help him deliver a project which was almost done as per his statements. But product team had different openions based on the issues raised in that project.
Comming back to our conflict, it was about project delivery process, out of 86 bugs we have received from the product team he was not ready to accept most of those as he told its a backend team issue and needs to be handled or a proper responses need to be provided.
Some background on the project, we needed to prpvide a quick view of the existing working product details page of e-commerece products on the search page itself. Here the product page was working from long time and was stable, we needed to replicate the same scenarios on the search page with minimal design.
He also had conflicts with US team members about some code standards which were affecting PR's I also raised as they were scrutnizing code due to past records.


Conflicts I had
  1. Code qualtiy issues => Code was breaking at multiple places on different types of product and we were supposed to provide a generic solution which sould have worked on all the scenarios.
  2. Code delivery and completion timelines => Product team needed to complete the project in a certain timeline but they also had a lot of open issues to be precice 86 open bugs and he was not ready to complete those and I wanted to take care of the different scenarios to deliver the product, but his vision of the product was differnt then mine.

What measure I took to resolve the conflict.
  1. Since I was new to the team and very junior to him, still I wanted to complete the project and atleast keep my self out of the conflicts in the new place, I planned to discuss directly with the product team and work on the open bugs and the getting to know their expectations.
  2. I had a discussion with my manager as well to plan on the future and process of the project. Later my manager included couple of more engineers in the team and moved the staff engineer to different project. We were left with a complete new project and 86 bugs on our plate and a tight deadlines. So provided new timelines based on the open bugs, worked overtime to fix the bugs and complete the project within timelines, received the bravo award from the company for that quarter of my work.


Answer 2.
I was working with Microsoft team and a new project was started.
Background details on the project =>
This new project was about migrating the old existing API's powered by powershell framework, specially designed for Skype and continued in Microsoft teams project. The new API's were supposed to be minimal in just with required response per request, faster with DB interactions and overall needed to save a lot of cost for Microsoft.
My task was to work on the UI side to support this migration and use the new end points instead of the previous, this included the requirement gathering of all the existing API's usage details.
Code structure was setup with MobX store and individual API was saving its details in different MobX stores with all the possible CRUD operations.

Situation => The execution process of the backend and front end project was conflictin and I needed to explain and onboard the backend team and entire product team planning.

Situation => To fasten the projecess backend team planned to knock off the get/Read API's first and then take care of the rest of the Create, Update and delte part. This was a problem on frontend due to the way current project was setup. Where individual MobX store was saving the entire information about the existing API and we also needed to generate new MobX stores for supporting the new API's. So the best scenario for us was to get the whole CRUD operation at the same time we will use a feature flag to create a complete new store of the new config api and use it in place of existing API's. Now this was conflicting with the entire project plan on the backend and frontend exution.



Answer 3. This can be used in a question where interviewer will ask tell me situation when you had a big conflict and you though you were right but you ended up being wrong.

Situation => 
Conflict with backend engineer about the API response break after 2 years of API design.
As per the previous contract UI was expecting an empty array response in a property, and after 2 years of desigining and using this API some engineer made a change which used the default behavior of the programming languagge and instead of returning the empty array it returned null and due to this UI started breaking.

Task => My task was to work as per the initial contract and consume the API response on UI side. But due to this unexpected response UI was breaking so I had to debug the issue and found out that it was failing due to the bad API response.

Action => I debuged the issue and notified the back end engineer about the sitatuation. He didn't accept the fact acted as per his knowledge on the backend that its a valid response if there is no data.

Result => We both accepted our faults after some discussion as on the UI side I should have handled the edge cases properly and on the service side he shouldn't have broken the contract.


2. Describe a challenging project you've worked on. How did you approach it, and what was the outcome?

Situation => Quick view project
Task => Fix 86 bugs came with this bug
Action => I asked for 1 more resouce and divided the bugs, used white boards to track the bugs and setup open discussions between team members in a war room for possible solutions, which lead to open brain storming and possible solutions ideas sharing. It helped me knockdown bugs faster and on timely basis. We also prepaired a new timeline for the project based on open discussion and shared it with product and engineering LT team. I also streched some extra time to fix these bugs.
Results => I was able to fix all the assigned bugs in given timelines and also received bravo award for that quarters best work.


3. Have you ever led a team? What strategies did you use to ensure successful collaboration and delivery?

Situation => Yes I lead a team of 3 members including two full time employees and one vendor.
Task => To onboard new members to the project, task distribution among team members based on their strengths, track the progress of given work, discuss with product team for possible requirements clarification and keeping them in loop for possible solutions.
Action => I knew vendor member had less knowledge and lacked the responsibility of the complete project so I used his time for the accessibility testing, and discussion with accessibility reporting team. Also took his help to write end to end test cases using protractor framework. Based on the prior knowledge of the one higher experienced member to give him responsibility of the existing manage apps page and other less experience person assigned a task of depricating not required policy pages.
Also setup weekly 3 days sync up for status tracking and QnA for any queries.
Also had a weekly sync with my manager and product team for keeping the work progress updated to all the stackholders.
Result => All of us was on the same page for the requirements perspective and smoothly conducted the implementation.


4. Tell me about a time when you disagreed with a technical decision. How did you express your opinion, and what was the result?

Answer 1. Provide information about the technical discussion with IC3 team owner Amresh and product team members.

Answer 2. 
Situation => Provide information about the existing flow of API design where the updates to a simple status attribute was required to provide the entire payload rather then just the delta part of it.
Task => Planning for the api design and collaborate as a reviewer.
Action => After analyzing the situation I expressed my concerns about the POST api request which was accepting the entire app details including the appId, appStatus, assigned users, assigned groups etc. so if we are just changing the status to assigned to everyone, or no-one then we shouldn't provide information of the assigned users and groups etc, as if we do a group operation of all the records updates then it will increase the payload size and it will decrease the API latency which will eventually lead to a bad user epxerience.
Result => After conveying the concerns they took the action items to use the delta format instead of the entire payload.


5. Can you describe a situation where you had to prioritize multiple tasks with tight deadlines? How did you handle it?

Answer 1.
Situtation => During the project of quick view I had to handle 86 bugs inherited with the project and I needed to handle those as a multitasker.
Task => We created a war room to analyze and discuss the possible solutions of all the bugs which was collaboarative approach to handle the multiple tasks in the tight deadlines.
Action =>
Results => We delivered the project.


6. Tell me about a time when you had to mentor or support a junior engineer. What was your approach?

Answer 1.
Situation => In recent project I needed to support and mentor a junior engineer on the fundamentals work of accessibility and other bugs resolving.
Task => Fundamentals work of providing accessibility and other bugs support
Actions => I analyzed the bugs and came up with an idea on possible solutions and created an excel sheet with these details of work items and possible solutions. Then I assigned these work items to the junior engineer, since she was new to the accessibility bugs I needed to provide her some context and few resources about this and later discussed these bugs possible solutions with her.
Reviewed her PR's and provided review comments.
Results => She took some time to ramp up on this task and later she became familiar with this work stream and now she is able to individually handle the accessibility tasks without my support of initial analysis, there some times when she need some suggestions on possible solutions then she come to me, and I also belive in a fact in the learning path we should first do our initial home work for possible solutions and present to mentors and ask them this is my understanding and tell me if this is correct or you have different idea on this.

Answer 2.
Situation => Mentoring junior engineer on the policy deprication.
Task => The migration required deprication of existing policy based infra and I delegated this task to a junior engineer.
Actions => I gave the project background details, setup a 3 day weekly sync setup for the open questions and provided the initial design documents along with possible solutions discussions.
Results => This engineer was an experienced engineer and he was fast learner so he picked up the tasks fast and later I just needed to jump in for some product decision discussions and code review tasks only.


7. Describe a time when you improved a process or tool at work. What changes did you implement, and how did they impact the team?

Situtations
  1. War room setup in quick view project.
  2. 3 days weekly sync setup between UI crew to discuss on the progress and open questions asking.
  3. Technical learning sessions for projects in progress and completed in past.
  4. Quick POC and demo for the new end to end testing tool playwrite for the ongoing project which was using the protractor as e2e testing framework, why playwrite and what was lacking in protractor.
  5. BiWeekly coffe sessions between team members to have formal conversations as everyone was working remotely and we needed to make bonding between team mebers so I came up with this idea of having informal discussions between team members and play some games during this period.


# Leadership questions

1. How do you evaluate the performance of the engineers you work with?

"I evaluate an engineer's technical performance by considering how effectively they solve problems, handle challenging tasks, and deliver high-quality code or solutions. I also assess their ability to learn and apply new technologies and methodologies to improve the overall product or project."

"Another important factor I focus on is their ability to collaborate with others. Engineering is a team effort, and it’s important to evaluate how well they communicate with other team members, especially in terms of feedback, sharing updates, and being open to suggestions."

"I also look at how well they adhere to project timelines and quality standards. Meeting deadlines is critical, but it’s also important that they maintain the quality of their work and follow best practices in coding, testing, and documentation."

"Lastly, I evaluate how invested the engineer is in their personal development. Are they proactive in learning new skills, seeking feedback, and showing an interest in growing both technically and professionally?"

"I also consider feedback from peers, stakeholders, and cross-functional teams. Engineers who take feedback well and are open to constructive criticism are more likely to improve and contribute more effectively in the long run."

3. How do you ensure that your team members feel supported and motivated?
4. How would you handle a situation where a team member is not meeting expectations?
5. Have you ever managed a project with high ambiguity? How did you approach it and bring clarity to the team?
6. Tell me about a time you had to manage a crisis or unexpected issue in a project. What steps did you take to resolve it?
7. How do you handle underperforming team members and ensure they improve over time?
8. Can you describe a situation where you had to advocate for your team or project to upper management?



# Technical leadership questions

1. How do you approach architecture design decisions? Can you walk us through a recent example where you made a key architectural choice?

Give example of architecture design decision of computation logic, based on what trade offs we decided to add the computation logic on client side instead of service side, what outcomes it bring, and how did you collaborated with service team.

2. Explain how you would build a system to handle millions of requests per second. What factors would you consider in your design?
For client side usages

  1. Efficient Resource Loading
  - Lazy Loading & Code Splitting: Implement lazy loading to load only the critical resources (e.g., HTML, CSS, JavaScript) initially, deferring the loading of non-essential resources like images, third-party scripts, or additional components. For example, React's React.lazy and Suspense can help in dynamically importing components only when needed.
  - Tree Shaking: Use bundlers like Webpack or Vite to eliminate unused code (dead code elimination). This reduces the JavaScript bundle size and ensures only the necessary code is loaded.
  - Asset Compression: Minimize the size of resources (CSS, JS, images, etc.) using gzip or Brotli compression to improve loading times, especially for large assets.
  - Bundling: Combine multiple resources into fewer HTTP requests using bundling tools (e.g., Webpack). This reduces the number of HTTP requests, lowering the time required to fetch resources.

  2. Caching
  - Service Workers: Use service workers for caching static assets (e.g., images, stylesheets, JavaScript) on the client-side. This allows the app to work offline and reduces the need for repetitive requests to the server.
  Service workers can intercept requests and provide cached content when the network is unavailable or slow, improving performance and reducing load on servers.
  - Browser Caching: Leverage HTTP caching headers (e.g., Cache-Control, ETag) for long-lived resources like images or fonts. This reduces repeated requests for unchanged resources.
  - Content Delivery Network (CDN): Use a CDN (e.g., Cloudflare, AWS CloudFront) to cache and serve static assets closer to the user’s geographical location, reducing latency and speeding up loading times.

  3. Efficient Network Communication
  - HTTP/2 and HTTP/3: Use modern protocols like HTTP/2 or HTTP/3, which reduce latency and improve performance by allowing multiplexing of requests over a single connection and prioritizing critical requests.
  - Asynchronous Requests: Utilize AJAX (using Fetch API or Axios) for making asynchronous requests. This avoids blocking the rendering of the page while waiting for a server response.
  - GraphQL: For highly dynamic or interactive websites, GraphQL can reduce the number of requests needed by allowing clients to query exactly the data they need, avoiding over-fetching or under-fetching of data.
  - WebSockets / Server-Sent Events (SSE): For real-time applications (e.g., live updates, chat), implement WebSockets or SSE to establish persistent connections with the server, avoiding the overhead of making multiple HTTP requests.

  4. Throttling and Debouncing
  - Debouncing: For user-triggered events like typing in a search box or filtering data, use debouncing to limit the frequency of API requests. This means the system waits until the user stops typing for a predefined time before sending the request.
  Example: Use a debounce function to ensure a search query is only sent after the user stops typing for 500ms.
  - Throttling: For actions like scrolling, resizing, or mouse movements, use throttling to limit how often requests are sent to the server, reducing unnecessary calls.
  - Rate Limiting: For user actions, consider implementing rate limiting to prevent abuse (e.g., limit the number of requests a user can make to the API in a given time frame).

  5. Client-Side Storage (Local Storage & IndexedDB)
  - Local Storage: Use localStorage to store small pieces of data persistently on the client side. For example, caching user preferences or small chunks of data that don’t change frequently can be stored in the browser.
  - IndexedDB: For larger datasets or complex data structures, use IndexedDB (a client-side NoSQL database) to store and query data in the browser. This is helpful for progressive web apps (PWAs) and can reduce the need to make requests for data that has already been fetched.

  6. UI/UX Optimization
  - Skeleton Screens: Use skeleton screens or loading spinners to provide immediate feedback to the user, which gives the illusion of faster load times, even if data is still being fetched.
  - Progressive Rendering: Implement techniques such as progressive rendering or incremental loading to display content as it loads. For example, load critical content first, and defer loading of less important elements.
  - Image Optimization: Use responsive images and serve images in the appropriate format (e.g., WebP) and resolution depending on the user’s device and screen size. Tools like Imgix or Cloudinary can automate this process.
  - Lazy Load Images: Load images only when they are about to come into the viewport. This reduces initial page load time and bandwidth usage.

  7. Concurrency & Parallelism
  - Concurrent Requests: Use Promise.all or Promise.allSettled to execute multiple requests in parallel without blocking. This allows the page to fetch resources concurrently, improving page load times.
  - Web Workers: Use Web Workers to offload heavy computation tasks (e.g., data processing) to a background thread, keeping the main thread free to handle UI rendering and user interactions.

  8. Progressive Web App (PWA) Principles
  - Offline Support: Build your frontend as a Progressive Web App (PWA) to ensure that the app can function even when the user is offline. Service workers can cache content, and the app can store data locally.
  - Push Notifications: Use Push Notifications to engage users even when they are not on the app, sending them updates or important messages asynchronously.
  9. Error Handling and Graceful Degradation
  - Graceful Degradation: Ensure the frontend gracefully degrades when parts of the application are unavailable due to network issues or server failures. For example, if the API call fails, show a meaningful error message and allow the user to retry.
  - Retry Logic: Implement retry logic with exponential backoff for failed requests. For example, if a request fails, automatically retry it a few times before notifying the user of the issue.
  - Global Error Handlers: Implement global error handlers (e.g., window.onerror, unhandledrejection for promises) to catch unexpected issues and provide meaningful feedback.
  10. Monitoring & Analytics
  - Real-Time Monitoring: Implement real-time monitoring of frontend performance using tools like Google Lighthouse, New Relic, or Sentry. These tools can track issues such as slow page loads, broken scripts, or performance bottlenecks.
  - Client-Side Logging: Log key user interactions and API call metrics to a backend or third-party service to analyze performance, error rates, and user behavior.
  - User Behavior Tracking: Use tools like Google Analytics or Mixpanel to track user actions, identify patterns, and optimize the frontend experience based on actual usage data.

3. How do you ensure code quality and maintainability in the systems you develop?

  1. Code Reviews
  - Peer Reviews: Regular code reviews are one of the best ways to ensure code quality. Having peers review each other's code helps catch bugs, identify areas for improvement, and maintain coding standards. It also encourages knowledge sharing within the team.
  - Automated Checklists: Using standardized checklists for code reviews can ensure consistency across all reviews. This can include things like checking for proper error handling, adherence to style guides, and test coverage.
  - Collaborative Feedback: Foster a culture of constructive feedback, where suggestions are made to improve the code quality without being critical of individuals. It helps create a collaborative environment.

  2. Adhering to Coding Standards
  - Style Guides: Define and follow consistent coding style guides. This includes naming conventions, indentation, and spacing. Adopting a widely-accepted style guide (e.g., Airbnb JavaScript Style Guide for JavaScript or PEP 8 for Python) helps make code more readable and reduces cognitive load for developers.
  - Linters: Use linters (e.g., ESLint for JavaScript, Pylint for Python) to enforce code style rules automatically during development. This helps identify common issues like unused variables, incorrect formatting, or potential bugs before they even make it to the code review stage.
  - Prettier: Using code formatters like Prettier ensures that code is automatically formatted according to a defined standard, making it more consistent across the project.

  3. Writing Clear and Descriptive Code
  - Descriptive Naming: Use clear and descriptive variable, function, and class names. Names should reflect the purpose and behavior of the code, making it easier for someone new to understand the logic without requiring extensive comments.
  - Self-Documenting Code: Strive for code that is easy to read and understand with minimal comments. Instead of writing long explanations, code should speak for itself. If comments are needed, they should explain "why" something is done, not "what" is being done.
  - Avoid Magic Numbers/Strings: Replace hardcoded values (magic numbers or strings) with named constants or configuration values. This improves readability and makes it easier to modify those values later.

  4. Test-Driven Development (TDD)
  - Unit Tests: Write unit tests to verify the behavior of individual components or functions. This ensures that each piece of the code works as expected and can be refactored or modified safely.
  - Test Coverage: Aim for a high test coverage, particularly for critical parts of the system. Tools like Jest, Mocha, or JUnit can provide coverage reports to ensure that the system is well-tested.
  - Automated Testing: Use automated tests for unit tests, integration tests, and end-to-end tests. This ensures that the system is consistently tested with every code change and helps catch regressions early.
  - CI/CD Integration: Integrate tests into your CI/CD pipeline to run tests automatically when code is pushed to version control. This helps ensure that new changes do not break existing functionality.

  5. Modular and DRY (Don’t Repeat Yourself) Design
  - Modular Code: Break the system down into smaller, reusable components or services. This makes the code easier to understand, test, and maintain. Microservices or modular monoliths can be used to organize large systems into smaller, self-contained modules.
  - Code Reuse: Avoid duplication by creating reusable functions, utilities, and components. Instead of duplicating logic across multiple places, write generic, reusable code that can be shared across different parts of the system.

  6. Separation of Concerns
  - Layered Architecture: Ensure that different concerns are separated into distinct layers or modules. For example, in a web application, separate the presentation layer (UI) from the business logic (services) and the data layer (database).
  - Single Responsibility Principle (SRP): Each module, class, or function should have one responsibility. This makes the system more understandable and easier to modify without affecting other parts of the system.
  - SOLID Principles: Follow SOLID principles (Single responsibility, Open/closed, Liskov substitution, Interface segregation, and Dependency inversion) for object-oriented design to ensure that classes and objects are structured for maximum maintainability.

  7. Version Control Best Practices
  - Meaningful Commit Messages: Write clear and concise commit messages that explain the reason for the change. Use conventional commit messages (e.g., feat:, fix:, docs:) to standardize and organize the commit history.
  Small, Incremental Commits: Break down changes into small, incremental commits that focus on one specific change at a time. This makes it easier to track and review changes.
  - Branching Strategy: Use an organized branching strategy, like GitFlow or GitHub Flow, to manage features, bug fixes, and releases efficiently. This ensures that changes are made in a structured and predictable way.

  8. Documentation
  - Code Documentation: Use tools like JSDoc or Sphinx to generate documentation directly from code comments. This helps developers understand how to use functions, classes, and modules without having to read through all the code.
  - API Documentation: Use tools like Swagger/OpenAPI to document APIs automatically. This ensures that the backend and frontend teams (and any third-party developers) have a clear understanding of how the APIs should be used.
  - Project Documentation: Maintain clear and up-to-date project documentation that explains the architecture, design decisions, and how to contribute to the project. This helps onboard new team members quickly and reduces knowledge silos.

  9. Continuous Integration and Delivery (CI/CD)
  - Automated Builds: Set up CI/CD pipelines to automatically build and test the application whenever code is pushed or merged. This helps catch issues early and prevents broken code from reaching production.
  - Code Quality Tools: Integrate code quality tools (like SonarQube, CodeClimate, or Codacy) into your CI pipeline to ensure that the code meets predefined quality metrics, such as complexity, duplication, and code coverage.

  10. Refactoring and Technical Debt Management
  - Refactoring: Continuously improve and refactor the code to keep it clean and maintainable. Refactoring should be a regular part of the development process, not just a one-time activity.
  - Technical Debt: Keep track of technical debt and address it incrementally. Prioritize technical debt that has the biggest impact on system performance, security, or maintainability.
  - Design Patterns: Use design patterns where applicable (e.g., Singleton, Factory, Observer, etc.) to solve common problems in a standardized and maintainable way.

  11. Performance Optimization
  - Code Profiling: Regularly profile the application to identify performance bottlenecks and optimize critical sections of code.
  - Scalability: Design the system with scalability in mind, considering factors like database indexing, load balancing, and caching mechanisms. Efficiently handle large-scale requests and data volumes.

4. How do you manage technical debt within your team or project?
5. Describe your experience with mentoring engineers through complex technical challenges. How do you provide guidance and support?