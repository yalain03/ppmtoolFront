import axios from 'axios';
import { GET_ERRORS, GET_BACKLOG, GET_PROJECT_TASK } from './types';

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

export const getBacklog = backlog_id => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8080/api/backlog/${backlog_id}`);
        dispatch({
            type: GET_BACKLOG,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
}

export const getProjectTask = (backlog_id, pt_id, history) => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8080/api/backlog/${backlog_id}/${pt_id}`);
        dispatch({
            type: GET_PROJECT_TASK,
            payload: res.data
        });
    } catch (err) {
        history.push('/dashboard');
    }
}

export const updateProjectTask = (backlog_id, pt_id, history) => async dispatch => {
    try {
        await axios.put(`http://localhost:8080/api/baclog/${backlog_id}/${pt_id}`);
        history.push(`http://localhost:8080/api/backlog/${backlog_id}`);
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }); 
    }
}