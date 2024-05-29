import React, { useState } from 'react';
import './Home.css'
import Siderbar from '../../components/Sidebar/Siderbar';
import Feed from '../../components/Feed/Feed';

const Home = ({sidebar}) => {
  const [category, setCategory] = useState(0);
  return (
    <div style={{display:'flex'}}>
     <Siderbar sidebar={sidebar} category={category} setCategory={setCategory}/>
     <div className={`container ${sidebar? '': 'large-container'}`}>
        <Feed category={category}/>
     </div>
    </div>
  );
}

export default Home;
