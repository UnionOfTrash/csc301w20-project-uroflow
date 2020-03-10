# SickKids Uroflow

 > _Note:_ This document is meant to be written during (or shortly after) your review meeting, which should happen fairly close to the due date.      
 >      
 > _Suggestion:_ Have your review meeting a day or two before the due date. This way you will have some time to go over (and edit) this document, and all team members should have a chance to make their contribution.


## Iteration 01 - Review & Retrospect

 * When: March 6th, 2020
 * Where: Peter Gilgan Centre for Research and Learning

## Process - Reflection


#### Q1. Decisions that turned out well

1. Scheduling a fixed weekly meeting with our partner.
> A weekly meeting with our partner keeps them in the loop and ensures that they are always aware of our current process and what we are building. It also provides both parties with a face-to-face opportunity to make decisions together.
2. Demonstrating our current process on the project during each meeting and ask for our partner's feedback.
> Demonstrating our application on a weekly basis gives our partner regular updates throughout the development stage of the product. It is also crucial to obtain feedback about our current work and adjust the features accordingly.
3. Asking our partner for more detailed requirements on a specific feature during the weekly demo.
> Since our application serves more than one type of user, it is always essential to understand what features each kind of user would want and how they would want to use it in the application. For example, features clinicians would want on the web app might defer from features researchers would want. It is our responsibility to ask for these types of requirements continually and incorporate them into our product to meet as many users' needs as possible. 
4. Creating a Slack channel with our partners for real-time discussion on the project.
> Due to scheduling conflicts, it is usually impossible to have every member from our team and our partner's team to show up on the weekly meeting. A weekly meeting may also be not frequent enough as we may run into confusion about a particular feature anytime during product development. A Slack channel enables real-time communication between our partner and us, and we would be able to get feedback on a specific feature within one day without stocking up all our questions for the weekly meeting. Our partner can also post any suggestions and concerns regarding the product.
5. Using made-up data to run the front end.
> Data mocking allows the front end and back end to be developed independently of each other. It is also helpful during testing when we want to see the application's behavior in a specific state. We can also define the format of data transmission between the front end and back end with made-up data for better communication.
6. Running our developing product on Docker.
> Docker simplifies and accelerates our workflow by isolating our app from the environment. It is also convenient to use as we can run our app in one-click.

#### Q2. Decisions that did not turn out as well as we hoped

1. Not asking for our TA's help until near the end of deliverable 2.
> Our backend and mobile developers were struggling with the backend API for more than three weeks with no significant process. We didn't approach Adam, our TA, for help until the very last tutorial, which turned out to solve our problem within the same day. We wasted a lot of time on this and our members were very frustrated. This issue could have been prevented if we asked for the teaching staff's help earlier.
2. Implementing quality assurance for front-end applications is not efficient.
> Since deliverable 2 involves many front-end user behaviors, they are too trivial to test. Asides, the JEST module used for testing is not compatible with the MUI module.
3. Understaffed mobile development.
> During the planning stage of the project, we decided to have 2 of our members responsible for our mobile development. However, our members ran into a lot of trouble trying to get the mobile app prototype even running. This issue was partly caused by few members developing the mobile app.
4. Lack of use in Github Issue
> We have generally used Slack or group chats to address any questions and assign tasks regarding the project. But due to the nature of group chats, important information might get flushed out by newer conversations.
5. Lack of communication with former mobile app developers.
> Since we are building based on an existing mobile prototype, there were a lot of unclear instructions left by previous developers. We did not have a way to approach them since they are students who took this course formally. 


#### Q3. Planned changes

1. More usage of TA resources.
> Throughout the development process, we didn't ask for our TA's or instructor's help until the end of Deliverable 2. We wasted a lot of time trying to get the backend running when the problem may be solved within a short amount of time with help from a TA. 
2. More usage of Github Issue.
> We have generally used Slack or group chats to address any issues or questions regarding the project. However, information like this gets easily flushed out in chat records and some members might miss important details. Github Issue is also a comprehensive and convenient way to keep track of tasks throughout the development process.
3. More conversations with the group of students doing the previous mobile app.
> We spent lots of time figuring out how to build and run the mobile app as well as using their API to connect with the database, which is time-consuming and not effective. Now we have managed to reach some of the students that were developing the mobile app last semester. We decide to make more use of their suggestions to build our mobile app efficiently.

## Product - Review

#### Q4. How was your product demo?

#### Preparing For The Demo
We set up and ran the web app with Docker on one of our teammate's laptop, where our partners can log in with a predefined username and password to view the main page of our web application. 

#### Presenting the Demo to our Partner 
In our weekly meeting, we demonstrated our web application to our partner from the clinicians' perspective. We managed to have all features required by SickKids runnable on front-end, including but not limited to:
*  **Login page**
* then in the **Main Panel**, user can **search patients**
* and **sort patients** by id or by recent update
* **view the detail of all records** of a patient
* **filter records** by date range or by conditions like leak, poop or urgent
* **view the interactive graph** generated from a machine learning model by clicking the thumbnail in the record

Our partner was satisfied with the layout and functionality of our web application. Before the backend is fully built-up(especially for the database and ML server), we used data mocking during the demo to show our partner how the web app works. We also drew data from a sample to generate a graph and went over the graph with our partners.

#### Feedback from our Partner
Our partner generally accepted our design and gave us some suggestions on the graph. Our partner suggested we can show more information like maximum, acceleration, time interval onto the new graph to provide the clinicians with more details. 
Our partner had an additional request for us to provide a sort function based on the patient's condition in the records panel.

#### What We Learned
For many of us, this was the first opportunity to work on a real project with a business partner. We learned that frequent communication with our partner is trivial to ensure we are not making something they do not want. We also learned to design our product with our users' best interests in mind by regularly asking nurses and researchers on board for their advice. From the product development perspective, members who were previously not familiar with web development had a chance to learn libraries and frameworks like React and Feathers. 