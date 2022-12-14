import React from 'react';
import Pagination from './Pagination';
import TableHeader from './TableHeader';
import "./style.css";
import { useEffect,useState } from 'react';
import my_data from "../../my_data.json";

function Table() {
  const[data,setData] = useState([]);
  const[dt,setDt] = useState('');
  const [order,setorder] = useState("ASC");
  const [currentPage,setcurrentPage] = useState(1);
  const [showpageValue , setshowPageValue]= useState(5);


//  pagination logic
const indexOfLastPost = currentPage*showpageValue ;
const indexOfFirstPost = indexOfLastPost - showpageValue;
const currentPosts = data.slice(indexOfFirstPost,indexOfLastPost);

useEffect(() => {
 setData(my_data.users);
  }, []);
const paginate = (pageNumber)=>{
  setcurrentPage(pageNumber);
}
function onShowPage(val){
  setshowPageValue(val)

}
function onGetValueChanged(val){
   setDt(val);
}

const sorting = (col)=>{
if(order === "ASC"){
const sorted = [...data].sort((a,b)=>
  a[col].toLowerCase()>b[col].toLowerCase()? 1 : -1
  );
 setData(sorted);
 setorder("DES");
}
if(order === "DES"){
  const sorted = [...data].sort((a,b)=>
    a[col].toLowerCase()<b[col].toLowerCase()? 1 : -1
    );
   setData(sorted);
   setorder("ASC");
  }}

return (
   <>
   <div style={{margin:"10px auto"}}>
   <TableHeader onGetValue={onGetValueChanged} onShowValue={onShowPage} searchVal={dt} showValue = {showpageValue}  />
  <div className="table_fixed">
  <table>
  <thead className="theadbg">
      <th>S.NO</th>
      <th onClick={()=>sorting("firstName")}>
      FIRST NAME
      </th>
      <th onClick={()=>sorting("maidenName")}>
       MIDDLE NAME
       </th>
      <th onClick={()=>sorting("lastName")}>
       LAST NAME
     </th>
      <th onClick={()=>sorting("gender")}>
      GENDER
      </th>
      <th>AGE</th>
      <th>PHONE</th>
      <th onClick={()=>sorting("username")}>USERNAME</th>
      <th>PASSWORD</th>
      <th>DATE OF BIRTH</th>
      <th>DOMAIN</th>
      <th>IP</th>
      <th>ADRESS</th>
      <th>CITY</th>
      <th>CARD EXPIRE</th>
      <th>CARD NUMBER</th>
      <th>Card TYPE</th>
      <th>CARD Number</th>
      <th>CURRENCY</th>
      <th>DEPARMENT</th>
      <th>TITLE</th>
    </thead>
  <tbody>
  {
  
  
  currentPosts.filter((item)=>item.firstName.toLowerCase().includes(dt) || item.lastName.toLowerCase().includes(dt)) 
  .map((item,index)=>(
  <tr className="trbg" key ={index}>
  <td>{index+1}</td>
  <td>{item?.firstName}</td>
  <td>{item?.maidenName}</td>
  <td>{item?.lastName}</td>
  <td>{item?.gender}</td>
  <td>{item?.age}</td>
  <td>{item?.phone}</td>
  <td>{item?.username}</td>
  <td>{item?.password}</td>
  <td>{item?.birthDate}</td>
  <td>{item?.domain}</td>
  <td>{item?.ip}</td>
  <td>{item?.address?.address}</td>
  <td>{item?.address?.city}</td>
  <td>{item?.bank?.cardExpire}</td>
  <td>{item?.bank?.cardNumber}</td>
  <td>{item?.bank?.cardType}</td>
  <td>{item?.bank?.cardNumber}</td>
  <td>{item?.bank?.cardType}</td>
  <td>{item?.company?.department}</td>
  <td>{item?.company?.title}</td>
  </tr>
))}
</tbody>
</table>
</div>
</div>
 <Pagination postsperpage = {showpageValue} totalposts = {data.length} paginate = {paginate} currentPage = {currentPage}/>
  </>
    )
}

export default Table