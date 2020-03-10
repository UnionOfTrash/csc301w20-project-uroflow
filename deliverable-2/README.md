
# SickKids Uroflow

> _Note:_ This document is intended to be relatively short. Be concise and precise. Assume the reader has no prior knowledge of your application and is non-technical. 

## Description 

SickKids Uroflow is an application that allows urology patients to do [uroflowmetry](https://www.aboutkidshealth.ca/Article?contentid=1269&language=English) at home and send test data remotely to clinicians. It is a common practice done in urology clinics to evaluate a patient's urine flow rate.

Currently, uroflowmetry tests can only be done with a machine in clinics. Since the test needs to be regularly conducted and is relatively easy compared to other urodynamic tests, it is taking up time from clinicians that could be better spent on other tasks. Imagine a busy day at an understaffed urology clinic. If nurses had to do uroflowmetry for many of the patients, there would be less time for them to conduct more intellectually demanding tests. From patients' perspective, the test is not easily accessible since patients need to travel to the clinic to do the test. A young patient living outside Ontario would have trouble showing up to every followup uroflowmetry test at the SickKids' clinic located in Toronto.

SickKids Uroflow provides a solution to this problem. Through our application, patients would record the sound of urine through the mobile app, which is then directly sent to the web database, where it is passed through a pre-developed natural network model that generates the uroflow curve. The curve is then shared with clinicians through the web app and patients through the mobile app.

Our application saves both clinicians and patients' time as patients can complete their tests without help from clinicians, and the result is automatically delivered to both parties. Since our application allows patients to do their tests anytime (and practically anywhere), clinicians can obtain more frequent and accurate uroflowmetry samples, which will improve their ability to diagnose and treat their patients. It also enables patients, especially young kids, to conduct their tests in an environment they feel comfortable with to obtain more accurate test data.

## Key Features

### Our application consists of a web app designed for clinicians and a mobile app designed for patients. We have only completed most features in the web app as the mobile app is still under discussion with our partner.

### Web App (Clinicians)
 - Users can log in with their predefined credentials.
     - Users would have been previously assigned to a group where they can access information of all patients associated with the group.
 - After Logging in, users are directed to the main page that is made up of two major components: a **patient panel** on the left and a **records panel** on the right.
     - Users can log out using the **LOGOUT** button on the top right of the screen.
 - In the patient panel, users are able to:
     - View the list of patients associated with their group. The list displays the **Study ID** and **number of test records** of each patient. There is also a **blue dot** that lights up if the patient has a recent upload that has not been checked by clinicians in the group.
     - **Sort** the list of patients by their Study ID or by most recent upload.
     - **Search** for a patient by their Study ID.
     - View test records of a specific patient by clicking the **DETAILS** button.
     - **Add a new patient** by clicking the **NEW PATIENT** button and entering information about the patient.
 - In the records panel, users are able to:
     - View the list of test records of a specific patient. For each record, users can see the **upload time** of the recording, the **uroflow curve** preview as a thumbnail, the **condition(s)** during the test, and **comments** from the patient and clinician.
     - Click on the uroflow curve thumbnail to view a more **detailed graph**.
     - Check the condition described by patients for each test. There are three icons in the condition column, representing **leak**, **poop**, and **urgent**.
     - View additional patient's comments regarding the test.
     - View and edit clinician's comments regarding the test.
     - **Filter** the list of records by **date range** or by **condition**.



## Instructions

### For Clinicians:
- Open the browser and use URL: **localhost:3000** to enter the main page.
- The account is pre-created with username: **even** and password: **even**.
    - After logging in, clinicians are directed to the main page with all the features. They can log out using the **LOGOUT** button on the top right of the screen.
- The patient panel on the left shows all patients associated with the clinicians's group. The patient panel displays the **Study ID**, **number of records**, and a **blue dot** that lights up for an unchecked test record for each patient.
- To search for a patient:
    - Enter the patient's Study ID in the **search bar**.
- To sort patients by Study ID or by recent uploads:
    - Click **ID** or **RECENT UPDATE** button below the search bar.
- To add a patient: 
    - Click on **NEW PATIENT** button to the right of the search bar. A dialog would pop up asking for basic information about the new patient. Click **ADD** in the dialog after filling in all the information to add a new patient to the system.
- To view a patient's records:
    - Click on the **DETAILS** button and view each test in the record panel.
- The records panel on the right shows a specific patient's test records. The records panel displays the **Uploaded time** of the test, **Uroflow Curve Preview** as a thumbnail, **Conditions** to indicate whether the patient has leak, poop, or urgent condition during the test, and **Patient's and Clinician's Comments**. 
- To view the uroflow curve in detail: 
    - Click on the thumbnail of the curve to view a **more detailed and larger graph** in a popup window.
- To view the condition reported by the patient during the test.
    - The condition column shows three icons, each representing **leak**, **poop**, and **urgent**. If the patient reported one or more of the above conditions during a test, the icon(s) would light up as red.
- To view the patient's and clinician's comments:
    - Click on **PATIENT"S COMMENTS** or **CLINICIAN'S COMMENTS** in the comments column to view the comments in a popup window.
- To change the clinician's comment: 
    - Simply edit the text box in the popup and hit **SAVE COMMENT**.
- To filter a patient's records by date range or by condition:
    - Click on the **DATE RANGE** button above the record list to select a time interval and hit **SAVE** get all matching records.
    - Click on the **CONDITION** button above the record list to select one or more conditions to filer and hit **SAVE** to get all matching records.

 
 ## Development requirements
 > * If a developer were to set this up on their machine or a remote server, what are the technical requirements (e.g. OS, libraries, etc.)?
 > * Briefly describe instructions for setting up and running the application (think a true README).
 
 - To set up the Web App:
    - must have Docker installed and opened
    - then:

     >`git clone https://github.com/csc301-winter-2020/team-project-2-hospital_for_sick_children.git`

     >`cd team-project-2-hospital_for_sick_children`
     
     >`git checkout origin/dev`
     
     >`cd src/webapp`

    - and run:

     >`./setup.sh`

     >`./run.sh`

    - now you can test in Chrome Browser with URL: **localhost:3000**

 
 ## Deployment and Github Workflow

> Describe your Git / GitHub workflow. Essentially, we want to understand how your team members shares a codebase, avoid conflicts and deploys the application.
 > * Be concise, yet precise. For example, "we use pull-requests" is not a precise statement since it leaves too many open questions - Pull-requests from where to where? Who reviews the pull-requests? Who is responsible for merging them? etc.
 > * If applicable, specify any naming conventions or standards you decide to adopt.
 > * Describe your overall deployment process from writing code to viewing a live applicatioon
 > * What deployment tool(s) are you using and how
 > * Don't forget to **briefly explain why** you chose this workflow or particular aspects of it!

### Sharing the codebase
Applying knowledge we learned from class, we created a develop branch called "dev" to avoid pushing unfinished code to the master branch and get around with chaotic traffic on the master branch. Since we are working on different folders for back end and front end with different pages and features, one dev branch is enough for us.

### Resolve conflict on merge
Each group member is assigned to a feature, and thanks to React, each feature can be written in a separate JSX file to prevent overlapping code. Every time a group member wants to push some changes, he/she will make a pull request to ensure minimal merge conflict, and "Check Status" command is used to avoid unnecessary "Adding". Since d2 is mainly based on the front-end, our code structure is rather simple. Conflict can usually be manually solved by the one who invoked it. If one has trouble solving a merge, he/she will reach other teammates trough our team's group chat.

### Product lifecycle
To reflect on our product life cycle, our group members would write commit messages concisely to make sure that the rest of the team members understand what features are implemented. After a teammate finishes some feature or finds some issue on previous features, he/she will immediately send messages to our team's group chat to make it is acknowledged. Additionally, an email will be sent to every group member for each commit to keep everyone in the loop.

### Naming conventions and standard
The team made an agreement on using camelCase for our naming convention.

### Deployment tool
Currently, our web application is deployed on Docker and running locally since it is a container that has the minimal dependencies the app needs and allows different developers to use the same development environment.

### Reason for the current workflow
Our current workflow is easy to understand and execute by all teammates and can rapidly solve most of the issues we encountered so far.

 ## Licenses 

 > Keep this section as brief as possible. You may read this [Github article](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/licensing-a-repository) for a start.
 > * What type of license will you apply to your codebase?
 > * What affect does it have on the development and use of your codebase?
 > * Why did you or your partner make this choice?

We will be applying the MIT License to our codebase. The MIT License puts only very limited restrictions on the "rights to use, copy, modify, merge, publish, distribute, sublicense and/or sell copies" of our application, giving software engineers at Sickkids more freedom to manage and maintain our product in the future. Our partner made this choice since they "have generally used the MIT License" in the past.

---
