import React from "react";


function Table(props){
    return(<>
     <tr>
    <td>{props.ip}</td>
    <td><button class="button button2"><i class="fa-solid fa-pen-to-square"></i></button><button class="button button1"><i class="fa-solid fa-trash-can"></i></button></td>
</tr>
</>)
}

export default Table