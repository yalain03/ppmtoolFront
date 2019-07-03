import React, { Component } from 'react';
import { getProject, createProject } from '../../actions/projectActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class UpdateProject extends Component {
    constructor() {
        super();

        this.state = {
            id: "",
            projectName: "",
            projectIdentifier: "",
            description: "",
            start_date: "",
            end_date: "",
            errors: {}
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const {
            id,
            projectName,
            projectIdentifier,
            description,
            start_date,
            end_date
        } = nextProps.project;

        this.setState({
            id,
            projectName,
            projectIdentifier,
            description,
            start_date,
            end_date
        });
    }

    componentDidMount() {
        this.props.getProject(this.props.match.params.id, this.props.history);
    }

    onChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmit(event) {
        event.preventDefault();
        const updatedProject = { ...this.state }
        this.props.createProject(updatedProject, this.props.history);
    }

    render() {
        const {errors} = this.state;

        return (
            <div>
                <div className="register">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <h5 className="display-4 text-center">Update Project form</h5>
                                <hr />
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            className={classnames("form-control form-control-lg", {
                                                "is-invalid": errors.projectName
                                            })} 
                                            name="projectName" 
                                            placeholder="Project Name"
                                            value={this.state.projectName}
                                            onChange={this.onChange} />
                                            {errors.projectName && (
                                                <div className="invalid-feedback">{errors.projectName}</div>
                                            )}
                                    </div>
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            className={classnames("form-control form-control-lg", {
                                                "is-invalid": errors.projectIdentifier
                                            })}
                                            name="projectIdentifier"
                                            placeholder="Unique Project ID"
                                            value={this.state.projectIdentifier}
                                            disabled />
                                            {errors.projectIdentifier && (
                                                <div className="invalid-feedback">{errors.projectName}</div>
                                            )}
                                    </div>
                                    <div className="form-group">
                                        <textarea 
                                            className={classnames("form-control form-control-lg", {
                                                "is-invalid": errors.description
                                            })}
                                            name="description"
                                            placeholder="Project Description"
                                            value={this.state.description}
                                            onChange={this.onChange}></textarea>
                                            {errors.description && (
                                                <div className="invalid-feedback">{errors.projectName}</div>
                                            )}
                                    </div>
                                    <h6>Start Date</h6>
                                    <div className="form-group">
                                        <input 
                                            type="date" 
                                            name="start_date"
                                            className="form-control form-control-lg" 
                                            name="start_date"
                                            value={this.state.start_date}
                                            onChange={this.onChange} />
                                    </div>
                                    <h6>Estimated End Date</h6>
                                    <div className="form-group">
                                        <input 
                                            type="date" 
                                            name="end_date"
                                            className="form-control form-control-lg" 
                                            name="end_date"
                                            value={this.state.end_date}
                                            onChange={this.onChange} />
                                    </div>

                                    <input type="submit" className="btn btn-primary btn-block mt-4" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

UpdateProject.proptTypes = {
    getProject: PropTypes.func.isRequired,
    createProject: PropTypes.func.isRequired,
    project: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    project: state.project.project,
    errors: state.errors
});

export default connect(mapStateToProps, { getProject, createProject })(UpdateProject);