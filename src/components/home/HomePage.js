import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as homeBtnFormActions from '../../actions/homeBtnFormActions';
import HomeBtnForm from './HomeBtnForm';
import toastr from 'toastr';
import swal from 'sweetalert2';
import {homeBtnFormInputValidation} from '../../validation/homeBtnFormValidation';

class HomePage extends React.Component {
    
    constructor(props, context) {
        super(props, context);

        this.state = {
            formData: Object.assign({}, this.props.formData), 
            errors: {},
            saving: false,
            saveBtnDisabled: true
        };

        this.updateFormState = this.updateFormState.bind(this);
        this.onSave = this.save.bind(this);
    }

    updateFormState(event) {
        const field = event.target.name;
        let form = this.state.formData;
        form[field] = event.target.value;
        this.setState({saveBtnDisabled: false});
        if(field == "input") {
            const valid = homeBtnFormInputValidation(form[field]);
            if(!valid) {
                this.setState({saveBtnDisabled: true});
            }
        }
        return this.setState({formData: form});
    }

    save(event) {
        event.preventDefault();
        this.setState({saving: true, saveBtnDisabled: true});
        this.props.actions.save(this.state.formData.input)
        .then(() => this.success()).catch(error => {
            toastr.error(error);
            this.setState({saving: false, saveBtnDisabled: false});
        });
    }

    success() {
        const {person, facility, exposure} = this.props;
        this.setState({saving: false, saveBtnDisabled: false});
        swal('The result of multiplying val3 with val5 is: ' + facility.val3 * exposure.val5);
    }

    render() {
        
        return (
            <div className="jumbotron">
                <h1>Welcome</h1>
                <HomeBtnForm formData={this.state.formData} disabled={this.state.saveBtnDisabled} errors={this.state.errors} onChange={this.updateFormState} onSave={this.onSave} loading={this.state.saving}/>
            </div>
        );
    }
}

HomePage.propTypes = {
    formData: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    person: PropTypes.object,
    facility: PropTypes.object,
    exposure: PropTypes.object
};

// Redux related functions 
function mapStateToProps(state, ownProps) {
    let formData = {
        input: ''
    };
    return { person: state.person, facility: state.facility, exposure: state.exposure, formData: formData };
}

function mapDisptachToProps(dispatch) {
    return {
        actions: bindActionCreators(homeBtnFormActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDisptachToProps)(HomePage);