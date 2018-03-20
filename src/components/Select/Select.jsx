import React from 'react'
import PropTypes from 'prop-types';

const generateSelect =(props)=>{
    generateSelect.propTypes={
        uniqueCategory: PropTypes.array,
        category: PropTypes.string,
        handleChange: PropTypes.func,
        label:PropTypes.string,
    }
    
    if(props.uniqueCategory){
        return (
            <div className="form-group">
                <label className="control-label">{props.label}</label>
                <select className="form-control" value={props.category} onChange={props.handleChange}>
                    {props.uniqueCategory.map((item,index)=>
                        <option value={item} key={item} >{item}</option>
                    )}
                </select>
            </div>
        )
    }
}
const Select = (props) => {
    
    return (
        <div>
            {generateSelect(props)}
        </div>
    )
}

export default Select