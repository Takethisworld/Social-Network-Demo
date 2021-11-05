import postReducer, { addPostActionCreator ,deletePost} from './postReducer';


let state = {post: [
    { id: 0, message: 'Hi', likeCounter: 25 },
    { id: 1, message: 'Hello MZFk', likeCounter: 56 },
    { id: 2, message: 'Whatsup MZFK', likeCounter: 31 },
    { id: 3, message: 'whatsup MZFK ', likeCounter: 22 }],
}

it (`length shold be incremented`, ()=>{
    //1.test data
    let action = addPostActionCreator ('Its Works')

    //2.action
    let newState = postReducer(state,action)
    //3. exception
    expect(newState.post.length).toBe(5)

})

it (`message post should be correct`, ()=>{
    //1.test data
    let action = addPostActionCreator ('Its Works')
    

    //2.action
    let newState = postReducer(state,action)
    //3. exception
    expect(newState.post[4].message).toBe("Its Works")

})

it (`after deleted post length shold be decrement`, ()=>{
    //1.test data
    let action = deletePost (1)
    
    //2.action
    let newState = postReducer(state,action)
    //3. exception
    expect(newState.post.length).toBe(3)

})

it (`after deleted post length shold't be decrement if id is incorrect`, ()=>{
    //1.test data
    let action = deletePost (1000)
    
    //2.action
    let newState = postReducer(state,action)
    //3. exception
    expect(newState.post.length).toBe(4)

})