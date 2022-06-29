import React from "react";
import Table from "./components/Table";
import IPs from "./ips";

function listIp(IP) {
    return (
      <Table
        key={IP.id}
        ip={IP.ip}
      />
    );
  }

function App(){
    return(
        <>
        <div class="container-fluid">
    <div class="title">
        <h1>IP Management</h1>
    </div>

    <div class="row">
        <div class="col-lg-4">
            <div class="button-save" >
                <button class="button-mm button4"><i class="fa-solid fa-plus"></i> </button> 
            </div>
        </div>
        <div class="col-lg-6">
            <table>
                <tr>
                    <th>IP address</th>
                    <th>Action</th>
                </tr>
                {IPs.map(listIp) }
            </table>
        </div>
        <div class="col-lg-4">
            <div class="button-nn" >
                <button class="button button3"><i class="fa-solid fa-floppy-disk"></i> </button> 
            </div>
        </div>
   </div>
</div>        
        </>
    )
}

export default App