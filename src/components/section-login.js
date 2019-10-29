import React from 'react';
import '../App.css';


class SectionLogin extends React.Component{
    render() {
        return(
            
            <div className="Section-Login">
               <form>
                    <div>
                        <label>User name: </label>
                        <input type="text" name="user_name" defaultValue=" "/>
                    </div>

                    <div>
                        <label>Password  .: </label>
                        <input type="text" name="password" defaultValue=" "/>
                    </div>
                </form>
            </div>
        );

    }
}

export default SectionLogin;