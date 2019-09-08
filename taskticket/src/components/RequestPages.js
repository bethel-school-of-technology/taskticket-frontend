import React from 'react';
import Requests from './Requests';
import { BrowserRouter as Route, Link } from 'react-router-dom';

const RequestPages = ({ match }) => (
    <div>
        <Link to={`${match.url}/form`}>
            <button className="FormField__ButtonRequest mr-20" type="button" >Request Form</button>
        </Link>
        <Link to={`${match.url}/list`}>
            <button className="FormField__ButtonRequest mr-20" type="button">Request List</button>
        </Link>
        <Link to={`${match.url}/view`}>
            <button className="FormField__ButtonRequest mr-20" type="button">Request View</button>
        </Link>
        
        <Route path={`${match.url}/:requestsId`} component={Requests} />
        <Route
            exact
            path={match.url}
            render={() => <h3>Click to find your request</h3>}
        />
    </div>
);
       
export default RequestPages;