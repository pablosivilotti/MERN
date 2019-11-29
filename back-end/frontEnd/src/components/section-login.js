import React from 'react';
import '../App.css';


class SectionLogin extends React.Component {
    render() {
        return (

            <div className="Section-Login">
                
                <form>
                    <div className="form-group row">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label"><strong>  Email  </strong></label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="inputEmail" placeholder=" Email" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label"><strong>  Password  </strong></label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword" placeholder=" Password" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </div>
                    </div>
                </form>
            </div>
        );

    }
}

export default SectionLogin;