export default{
    SET_SEARCH(state , search){
        state.key = search 
    },
    SET_USER(state, userData) {
        console.log("userData", userData);
        state.user = { ...userData }
    }
}