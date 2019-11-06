import React from 'react';
import '../App.css';


class SectionCreateAccount extends React.Component{
    render() {
        return(
            <div className="Section-CreateAccount">
               <form>
                    <div className="form-group row">
                        <label htmlFor="inputName" className="col-sm-2 col-form-label">Name </label>
                        <div className="col-sm-10">
                        <input type="name" className="form-control" id="inputName" placeholder="Name" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="inputUser" className="col-sm-2 col-form-label">User</label>
                        <div className="col-sm-10">
                        <input type="user" className="form-control" id="inputUser" placeholder="User" />
                        </div>
                    </div>
                  
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="inputPassword1" className="col-sm-2 col-form-label">Confirm Password</label>
                        <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword1" placeholder="Password" />
                        </div>
                    </div>
                    
                    <div className="form-group row">
                        <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">Create Account</button>
                        </div>
                    </div>
                    </form>
            </div>
        );

    }
}

export default SectionCreateAccount;