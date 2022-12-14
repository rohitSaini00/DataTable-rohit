import React from 'react';
import "./style.css";

const Pagination = ({postsperpage,totalposts,paginate,currentPage}) => {

const pageNumbers = [];
for (let i = 1; i <= Math.ceil(totalposts / postsperpage); i++) {
  pageNumbers.push(i);
}
return (
    <div className='pagination' >
    <div className='pagination_content'>
      {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className={currentPage == number ? "active" : null} >
              {number}
            </a>
          </li>
        ))}
    </div>
   </div>
  )
}

export default Pagination