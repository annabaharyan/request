import React from 'react';
import FirstColumnTable from './FirstColumnTable';
import SignUp from './SignUp';

const Columns = () => {
    return (
       <div className='colContainer'>
        <div className="col">
        <FirstColumnTable/>
        </div>
      <div className="col">
      <SignUp />
      </div>
       
    
       
       
       
       </div>
    );
}

export default Columns;
