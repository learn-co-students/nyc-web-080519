# Redux

## What and Why

- At its core, Redux is a way to hold shared state in a single location, called a store, that is accessible from any component. This reduces the complexity of application data flow (i.e. passing props through multiple components to be used only by a few components)

- Allows for central state management making application data flow easier to manage and application easier to test

- Allows for more efficient component rerendering

## Redux Vocabulary

Redux Library:

- Store
  Used to store STATE in a central place

- Reducer
  A FUNCTION used to make changes to state. Must take in STATE and an ACTION as arguments

- Dispatch
  A FUNCTION called on store that calls the REDUCER function and passes in up to two arguments: a required argument of an object that must have a key named TYPE and an optional argument called PAYLOAD that holds any additional information needed.

- Action
  The parameter that represents the second argument passed into the REDUCER function. Is an OBJECT with a key named "type"

React-Redux Library:

- Connect
  A HIGHER ORDER component that is used to give components access to THE REDUX STORE IN THE FORM OF mapStateToProps and THE STORE'S DISPATCH IN THE FORM OF mapDispatchToProps

- mapStateToProps
  A function used to pass parts of STORE/STATE TREE into a component's PROPS

- mapDispatchToProps
  A function used to give components access to CALL BACK FUNCTIONS that call on the store's DISPATCH function

## Steps to Redux

1. Create Store
2. Create Reducer to make changes to store
   - Use combineReducers to break your reducer into manageable functions
3. mapStateToProps to give component access to the store's state tree
4. mapDispatchToProps to add callback functions to the props of the component that allows that component to call dispatch
