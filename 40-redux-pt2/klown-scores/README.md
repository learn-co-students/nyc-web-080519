# Redux-Thunk


4 Main components to the "redux" library:

- Store -- created with `createStore`
- reducer -- a function that should return an object that becomes our new state tree
- dispatch -- a function that is used as a trigger for the reducer function
- action -- an argument passed into dispatch, which is then given to the reducer. It has a `type` and the reducer changes it's behavior based on the action's `type`

## What is a Thunk

- A thunk is a function that wraps an expression to delay its evaluation
- Allows us to better manage the async nature of AJAX requests
- Allows us to call an action creator that returns a function rather than an action (plain object)


## Question:

- reducer
- shouldComponentUpdate