# No-Blame Root Cause Analysis

- <b>Incident Name:</b> Page refresh on searching.
- <b>Incident Description:</b> During search, if you press the 'enter' button on keyboard to perform search it won't work. It will refresh the page.

## Owner: _Yash-Koshti_
 
# Overview:
 
## What happened:

While searching, using the search bar on the Home page, I accidently pressed the 'enter' button on my keyboard and expected to get result of the entered search. But instead the page got refreshed and nothing happened for the search.

As of now to perform searching we need to press the 'Search' button given at the end of the search bar.

Currently this bug is active.
 
## What is the impact: < Can't describe the severity >

- The impact on the users is none.
- But it compromises the user experience.
- It looks like there was some work around while working on the search feature and either some failed cases were not noted or were ignored.
- Fixing this issue should take 1 hours.

 
## Timeline:
- <b>First encounter:</b> A page refresh was observed while developing the UI of Search bar.
- <b>Identified as a bug:</b> When the system was ready then at the final inspection this behaviour was noticed and later declared as a bug.
 
# Analysis:
 
## Root Cause:
- To accept the search input `<input type="search">` is used inside the `<form>` tag. As we all know that the `<input>` is a form element which can trigger the form submission on 'enter' button click event.
- But here to manage the searches a `<input type="button">` is used which handles an onclick event that navigates the search towards the Details page.
- Hence this issue is caused because of form elements and their default behaviours. 

 
## Historical Context:
 
_**STILL NO BLAME**_
- This bug might not have occurred if form elements had been modified according to the need.

## What went well:
_NA_
 
 
## Other Open Action Items:
_NA_
