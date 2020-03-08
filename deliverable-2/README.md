# SickKids Uroflow

> _Note:_ This document is intended to be relatively short. Be concise and precise. Assume the reader has no prior knowledge of your application and is non-technical. 

## Description 
 * Provide a high-level description of your application and it's value from an end-user's perspective
 * What is the problem you're trying to solve?
 * Is there any context required to understand **why** the application solves this problem?

SickKids Uroflow is an application that allows urology patients to do [uroflowmetry](https://www.aboutkidshealth.ca/Article?contentid=1269&language=English) at home and send test data remotely to clinicians. It is a common practice done in urology clinics to evaluate a patient’s urine flow rate.

Currently, uroflowmetry tests can only be done with a machine in clinics. Since the test needs to be regularly conducted and is relatively easy compared to other urodynamic tests, it is taking up time from clinicians that could be better spent on other tasks. Imagine a busy day at an understaffed urology clinic, if urodynamics nurses had to do uroflowmetry for many of the patients, there would be less time for them to conduct more intellectually demanding tests. From the patient’s perspective, the test is not easily accessible since patients need to travel to the clinic to do the test. A young patient living outside Ontario would have trouble showing up to every followup uroflowmetry test at SickKids’ clinic, which is located in Toronto.

SickKids Uroflow provides a solution to this problem. Through our application, patients would record the sound of urine through the mobile app, which is then directly sent to the web database where it is passed through a pre-developed natural network model that generates the uroflow curve. The curve is then shared with clinicians through the web app and patients through the mobile app.

Our application saves both clinicians and patients' time as patients can easily do their tests without the help from clinicians and the result is automatically delivered to both parties. Since our application allows patients to do their tests anytime (and practically anywhere), clinicians are able to obtain more frequent and accurate uroflowmetry samples which will improve their ability to diagnose, prognosticate, and treat their patients. It also enables patients, especially young kids, to conduct their tests in an environment they feel comfortable with in order to obtain more accurate test data.

## Key Features
 * Described the key features in the application that the user can access
 * Provide a breakdown or detail for each feature that is most appropriate for your application
 * This section will be used to assess the value of the features built

Our application consists a web app designed for clinicians and a mobile app designed for patients.

### Web App (Clinians)
 - Users are able to login with their predefined credentials.
     - Users would have been previously assigned to a group where they are able to access informations of all patients associated with the group.
 - After Logging in, users are directed to a main page that is made up of two major components: a **patient panel** on the left and a **records panel** on the right.
 - In the patient panel, users are able to:
     - View the list of patients assiociated with their group. The list displays the **Study ID** and **number of test records** of each patient. There is also a **blue dot** that lights up when the patient has a recent upload that has not been checked by a clinician in the group.
     - **Sort** the list of patients by their Study ID or by most recent upload.
     - **Search** for a patient by their Study ID.
     - View test records of a specific patient by clicking the **DETAILS** button
     - **Add a new patient** by clicking the **NEW PATIENT** button and entering information about the patient.
 - In the records panel, users are able to:
     - View the list of test records of a specific patient. For each record, user are able to see the **upload time** of the recording, the **uroflow curve** preview as a thumbnail, the **condition(s)** during the test, and **comments** from the patient and clinician.
     - Click on the uroflow curve thumbnail to view a more **detailed graph** with statistical data (maximum flow, total void time, etc.)
     - Check the condition described by patients for each test. There are three icons in the condition column, representing **leak**, **poop**, and **urgent**
     - View additional patient's comments regarding the test.
     - View and edit clinician's comments regarding the test.
     - **Filter** the list of records by **date range** or by **condition**


### Mobile App (Patients)

## Instructions
 * Clear instructions for how to use the application from the end-user's perspective
 * How do you access it? Are accounts pre-created or does a user register? Where do you start? etc. 
 * Provide clear steps for using each feature described above
 * This section is critical to testing your application and must be done carefully and thoughtfully
 
 ## Development requirements
 * If a developer were to set this up on their machine or a remote server, what are the technical requirements (e.g. OS, libraries, etc.)?
 * Briefly describe instructions for setting up and running the application (think a true README).
 
 ## Deployment and Github Workflow

Describe your Git / GitHub workflow. Essentially, we want to understand how your team members shares a codebase, avoid conflicts and deploys the application.

 * Be concise, yet precise. For example, "we use pull-requests" is not a precise statement since it leaves too many open questions - Pull-requests from where to where? Who reviews the pull-requests? Who is responsible for merging them? etc.
 * If applicable, specify any naming conventions or standards you decide to adopt.
 * Describe your overall deployment process from writing code to viewing a live applicatioon
 * What deployment tool(s) are you using and how
 * Don't forget to **briefly explain why** you chose this workflow or particular aspects of it!

 ## Licenses 

 Keep this section as brief as possible. You may read this [Github article](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/licensing-a-repository) for a start.

 * What type of license will you apply to your codebase?
 * What affect does it have on the development and use of your codebase?
 * Why did you or your partner make this choice?



---
