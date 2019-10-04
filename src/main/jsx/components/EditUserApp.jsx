import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import loadjs from'loadjs';


import Confirmpwd from './mypage/confirmpwd.jsx'
import UserDetail from './mypage/userDetail.jsx';

class EditUserApp extends Component {

    
    componentWillMount(){
        loadjs(' static/js/jquery-3.2.1.min.js ', function(){
            loadjs(' static/js/deal.js ');
        });

    }
    
    render(){
        return(
            <div>
                <Route path="/member/mypage" title="editUser" component={UserDetail}/>
                <Route exact path="/member/mypage/trash" title="confirm" component={Confirmpwd}/>

            </div>
        )
    }
}
export default EditUserApp;