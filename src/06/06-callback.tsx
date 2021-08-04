import React, {MouseEvent} from "react";


export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {

        alert('user has been deleted');
    }

    const saveUser = () => {
        alert('user has been saved');
    }

    const nameChanged = () => {
        console.log('name changed')
    }

    const bloorFocus = () => {
        console.log('lost fucus')
    }

    return(
        <div>
            <textarea onChange={nameChanged}>dimuch</textarea>
            <input  onBlur={bloorFocus} type="text"/>
            <button onClick={deleteUser} >delete</button>
            <button onClick={saveUser}>save</button>
        </div>
    )
}