import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { updateStatus, fetchName } from '../actions';
import { updateAge,
    // updateName,
    updateStatus,
    fetchUserName
} from '../reducers/userReducer';

function Profile() {
    const {name, age, status} = useSelector((state) => {
        return state;
    })
    const dispatch = useDispatch();
    const fupdateAge = (age) => {
        dispatch(updateAge(age))
    }
    const fupdateName = () => {
        // const res = await fetch('https://jsonplaceholder.typicode.com/users');
        // const res2 = await res.json();
        dispatch(fetchUserName());
    }
    const fupdateStat = (status) => {
        dispatch(updateStatus(status))
    }
  return (
    <div>
        <h1>I am Profile component</h1>
        <h2>I am {name}, age {age} and I am a {status}</h2>
        <button onClick={() => fupdateAge(40)}>change age</button>
        <button onClick={() => fupdateName()}>change name</button>
        <button onClick={() => fupdateStat("single")}>update status</button>
    </div>
  )
}

export default Profile