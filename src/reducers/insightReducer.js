const initialState = {
  insights: []
}

//NEED to create an insight reducer, this will be the easiest way to handle the state of the insights, which means also i might need to make a backend route that will grab all the insights of a speficic post so that i can create a SET_INSIGHTS Action that makes accessing the state much easier to deal with. thus optimistic rendering will be much easier