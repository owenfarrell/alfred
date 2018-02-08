/*
 * Copyright 2018 CapTech Ventures, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';
import React from 'react';
import axios from 'axios';
import Loader from 'react-loader';

export default class UserMgmt extends React.Component {
    constructor( props ) {
        super( props );
        this.state = this.getState();
    }
    getState() {
        return ( {

        } );
    }
    renderUserList(){
        return(<select
        name="form-field-name"       
        />);
    }
    render() {
        return (
            <div className="container">
                <h4>User Management</h4>
                <h6>Please select user:</h6>
                {this.renderUserList()}
            </div>
        );
    }
}