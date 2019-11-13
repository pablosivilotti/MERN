import React from 'react';
import Header from '../components/header';
// import Options from '../components/options';
import HelloRedux from '../redux/components/CitiesRedux'
import Footer from '../components/footer';


function Redux() {
  return (

    <div className="Redux">

      <Header />
      {/* <Section />
      <Links /> */}
      {/* <Options /> */}
      <HelloRedux />
      <Footer />


    </div>
  );
}

 export default Redux;
