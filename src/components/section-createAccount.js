import React from 'react';
import '../App.css';


class SectionCreateAccount extends React.Component{
    render() {
        return(
            <div className="Section-CreateAccount">
                <form>                
                    <div>
                        <label>User name: </label>
                        <input type="text" name="user_name" defaultValue=" "/>
                    </div>

                    <div>
                        <label>Password: </label>
                        <input type="text" name="password" defaultValue=" "/>
                    </div>

                    <div>
                        <label>Confirm Password: </label>
                        <input type="text" name="password" defaultValue=" "/>
                    </div>
                </form>
            </div>
        );

    }
}

export default SectionCreateAccount;