import React from 'react';
import TextInput from '../common/TextInput';

const HomeBtnForm = ({formData, onSave, onChange, loading, errors, disabled}) => {
    return (
        <form>
            <h3>Write some input and click save</h3>
            <TextInput 
                name="input"
                label="Input"
                value={formData.input}
                onChange={onChange}
                error={errors.input} maxChars={10} />

            <input 
                type="submit"
                disabled={disabled}
                value={loading ? 'Saving...' : 'save'}
                className="btn btn-primary"
                onClick={onSave} />
        </form>
    );
};

HomeBtnForm.propTypes = {
    formData: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    loading: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    errors: React.PropTypes.object
};

export default HomeBtnForm;