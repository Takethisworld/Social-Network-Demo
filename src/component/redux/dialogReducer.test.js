import React from 'react';
import dialogReducer, { addMessageActionCreator,addDialog } from './dialogReducer';

let state ={dialogs:[
    {id:1, name: 'User1'},
    {id:2, name: 'User2'},
    {id:3, name: 'User3'},
    {id:4, name: 'User4'}
  ],messages:[
    {id:1, message: 'Hi'},
    {id:2, message: 'Hello MZFk'},
    {id:3, message: 'Whatsup MZFK'},
    {id:4, message: 'whatsup MZFK '},
  ]}

it (`length should be incremented`,()=>{
//1. data test
let action = addMessageActionCreator('New message')

//2.action
let newState = dialogReducer(state,action);

//3.expect
expect(newState.messages.length).toBe(5);
});

it (`length should be incremented`,()=>{
    //1. data test
    let action = addDialog('New message');
    
    //2.action
    let newState = dialogReducer(state,action);
    
    //3.expect
    //expect(newState.dialogs[5].message).toBe(6);
    });
    