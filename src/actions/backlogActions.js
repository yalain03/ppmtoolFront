import axios from 'axios';
import { GET_ERRORS } from './types';

export const addProjectTask = (backlog_id, project_task, history) => async dispatch => {
    try {
        await axios.post(`http://localhost:8080/api/backlog/${backlog_id}`, project_task);
        history.push(`/projectBoard/${backlog_id}`);   
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    } catch (error) {
        console.log(error.response.data);
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
}