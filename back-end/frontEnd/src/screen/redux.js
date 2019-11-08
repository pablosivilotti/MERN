import React from 'react';
import Header from '../components/header';
// import Section from '../components/section';
// import Links from '../components/links';
import HelloRedux from '../redux/components/Hello'
import Footer from '../components/footer';


function Redux() {
  return (

    <div className="Redux">

      <Header />
      {/* <Section />
      <Links /> */}
      <HelloRedux />
      <Footer />


    </div>
  );
}

 export default Redux;
