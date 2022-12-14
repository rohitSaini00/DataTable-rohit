import React from 'react';
import Grid from "@mui/material/Grid";


const TableHeader = (props) => {

return (
<>
<p style={{fontSize:"18px",fontWeight:"500",padding: "0px 12px",color:"#414143"}}>Server Side</p>
<div style={{borderBottom: "1px solid #efefef",margin:"20px 0px"}} ></div>
<Grid container Fluid >
<Grid xs={6} md={6} xl={6}>
<div className='show_page'>
<p>show &nbsp;
<select name="" id="" value={props.showValue} onChange={(e)=>props.onShowValue(e.target.value)}
style={{padding:"10px 12px",borderRadius: "6px",borderColor: "#efefef"}}>
    <option value="5">5</option>
    <option value="10">10</option>
    <option value="15">15</option>
    <option value="20">20</option>
    <option value="30">30</option>
    <option value="50">50</option>
    <option value="100">100</option>
    <option value="200">200</option>
</select> of <span style={{color:"#7e7b8c",fontWeight:"700"}} >500</span></p>
</div>
</Grid>
<Grid xs={6} md={6} xl={6}>
<div className='serach_box'>
<p style={{fontSize:"13px", color:"#9b9aa0"}}>Search:</p>&nbsp; 
<input type="text" name = "serachValue" value={props.searchVal} onChange={(e)=>props.onGetValue(e.target.value)} placeholder='Search...' style={{height:"37px",marginTop:"4px",border:"none",border: "1px solid #efefef",borderRadius: "5px"}} />
</div>
</Grid>
</Grid>
</>
)
}
export default TableHeader