# Candidate notes

Candidate Name: Alessandro Catania

Time taken: 2hrs

Language used: Javascript

## Notes
Typescript was not chosen so that I would have been faster and complete the challenge in the estimated 2hours time limit.

A spinner loader had been added on purpose to provide feedback to the user, so that he knows that the api request has been completed.

STRUCTURE (smart & dumb components):
Components are divided by using an atomic UI structure type (https://atomicdesign.bradfrost.com/chapter-2/);
- Atoms: components will only be responsible of ui and have no logic.
- Molecules: not needed in this case
- Organisms: is a combination of atoms (and molecues usually), so that an hypotetic "SearchPage" in this case could be reused for any other purpose in an app. The SearchPage don't have any logic related to API call or data logic. Is it just to layout the atoms in this case.
- Templates: In this case the BusinessSearchPage send the request to the API, get the data back, and elaborate the the values needed, which ultimately will be passed down to the "SearchPage" child.

Api Request
- Have been managed trought a Redux Store action,with an async middleware. 
- A specific API file related to business queries is available in the API folder.
- Cancellation of previous request have been made by using an axios feature called "cancel Token".

The meaning of this structure/components is obviously to illustrate how to maximise the re-usability and scalability of the app in the case this may become a bigger app. Obviously even more work can be done to make everything even more scalable, but for this challenge is enough.

Tips: Some components may seems a redundant wrapper, but this structure is really to emphatise components for a much bigger scalable app. Empty css files have been created for consistency purpose.

SOLUTION:
1) On load, the BusinessSearchPage component dispatch a Redux Action that fetch the API.
2) The API action check if a cancellation token already exist, which means a previous query is still pending. If exist, it will cancell all previous "search" queries. It then proceed to query the endpoint and then dispatch the action.
3) The results are stored in the Redux store.
4) The BusinessSearchPage component get automatically the current results fromt he redux store and elaborate the totalCount and average risk score.
5) These values are then passed down the the SearchPage children.
6) The SearchPage children then render the results by mapping the array passed from the parent component. date-fns packages has been used to translat the time. (date-fns use plain javascript dates and the bundle size is really small compared to other more common packages.)

7) In the SearchPage component there is a "SearchBar" component which will trigger a callback on every input in the textField. On every input change then, a callback run in the "BusinessSearchPage" component that will trigger the Redux Action which fetch the API (as in point 1).


IMPROVEMENTS IF MORE TIME WAS AVAILABLE:
- Use Typescript
- Use lastest EcamScript with Babel
- Add linter/code formatter
- Add bundle limitation
- Add toaster (or any other user feedback) for any api erros
- Improve responsiveness.
- Add skeleton loaders so that the user will have a better "first load" experience
- Add accessibility tools
- Add SonarCube
- Add i18n for translation/internazionalization
- Add scss module 
- Add cache
- ...

FEEDBACK ON THE CHALLENGE:
- The only little comment is that you should state that the url must contain the parameter "query=...." as it doesn't come straight forward from the README, I had to look in the Api.
