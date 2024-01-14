# CodeGrow
Hone your programming skills with this AI driven web app for personalized programming projects.


## Try It [Here](codegrow.rslatech.com)

## Inspiration
The inspiration for CodeGrow came from a common challenge faced by programmers of all levels: finding the right path to improve and expand their skills. I realized that while there are numerous resources available, what's lacking is a personalized approach to learning and project development. I wanted to create an app that not only suggests projects tailored to an individual's skill level and interests but also assists in planning, tracking progress, and connecting with a community. The hackathon theme of "Resolution" perfectly aligned with our vision of helping programmers to continually grow and achieve their personal and professional goals.

## What it does
CodeGrow is an AI-powered app designed to enhance the programming skills of its users through personalized project suggestions and comprehensive roadmaps. It starts with an initial assessment to understand the user’s current skills, interests, and goals. The app then generates project ideas matched to the user's profile, complete with detailed descriptions, roadmaps, and resources. The user can select one and receive some more information. Each time, the ideas are unique, making for a constant and refreshing supply of projects.

## How I built it
For the web platform, I used Javascript, HTML, and CSS along with BootStrap. Javascript was also used for the processing. Everything runs on the front end, making it fast and simple. I started the project on a page-by-page basis, first building the landing page, then the assessment, and finally the project selection. Of course, the most important part was generating the project ideas. For this, I integrated OpenAI's GPT API (using GPT 3.5 turbo) to generate the suggestions. 

## Challenges I ran into
This was the first time I have built such an extensive website, especially in just ~2 days. I ran into many problems concerning the HTML and CSS layout, but above all, processing all the data coming in and out was the most challenging. JavaScript is not my strongest front, so I had to do a lot of refreshing on some aspects, specifically when it comes to website building. Handling the Async functions was very bothersome, which I spent a lot of time trying to fix. Furthermore, figuring out the best way to prompt GPT into a compatible JSON format for further processing.

## Accomplishments that I'm proud of
By far my proudest accomplishment was completing all the JavaScript code for the website. Although I faced a lot of problems, in the end, seeing all my work come together beautifully was very satisfying. Especially seeing GPT's responses integrate perfectly and reliably nearly every single time. The development of an intuitive and engaging UI that appeals to users of varying skill levels is another significant accomplishment. I'm also proud of creating a platform that aids in skill development, especially one that I am very interested in. 

## What I learned
Throughout this project, I learned a great deal about website building, user interface design, handling API requests asynchronously, processing data throughout multi-page websites, and taking advantage of cookies to create a seamless user experience. I learned also a lot about Firebase web hosting, on which I deployed the website. Furthermore, this project required thinking a lot about what makes a good programming project, and so I learned a lot of practical things about project planning and how to realize these goals.

## What's next for CodeGrow
Moving forward, I plan to expand the range of programming languages and technologies covered by CodeGrow. Currently, the web app is essentially just a frontend app, which does not support user accounts, authentication, etc. It is essential to move this to the backend to realize features such as a personal project assistant, in contrast to just the initial prompts and suggestions. Such features I envision include use of more services (google search, to directly pull useful information off the web), collaboration between users, mentorship, etc. Furthermore, the app currently uses the OpenAI APIs for the AI features, this is not bad, but it is certainly not ideal as it becomes costly and slow. Ideally, a model would be hosted on a backend, fine-tuned for this very specific task, and adaptable to the user base. I would say I am quite experienced in machine learning and LLMs so this is a very exciting prospect.
