// import Spinner from 'react-bootstrap/Spinner';

import { Spinner } from "react-bootstrap";

export default function Spinners() {
   return (
      <div className='spinner' style={{display: 'flex', justifyContent: 'center', marginBottom: '1rem'}}>
         <Spinner animation="border" role="status" size="xlg">
            <span className="visually-hidden text-center">Loading...</span>
         </Spinner>
      </div>
   );
}