

import React from "react"

export default function Table (props){
    const currentUsers = props.users.map(user => {
        return (
            <tr key={user.email}>
                <td><img alt="user" src={ user.picture.thumbnail}/></td>
                <td>{user.name.first +  " " + user.name.last}</td>
                <td>{user.gender}</td>
        
                <td>{user.email}</td>
                <td>{user.cell}</td>
            </tr>
        )
    })
    return (
        <table>
            <tbody>
            <tr>
                <th>Profile Picture</th>
                <th>Full Name</th>
                <th>Gender</th>
                
                <th>Email</th>
                <th>Phone Number</th>
                
            </tr>
          {currentUsers}
            </tbody>
        </table>
    )
}