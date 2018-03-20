import React from 'react';
import PropTypes from 'prop-types';


const ShowCategories = (props) => {
    ShowCategories.propTypes={
        selectedCategory: PropTypes.array
    }
    const styles = require('./ShowCategories.scss')
    const getSelectCategory =(props)=>{

        if(props.selectedCategory){
            return props.selectedCategory.map((item,index)=>{
                return(
                    <div >
                        <div>
                            <h2 key={index++}>{item.title}</h2>
                            <div className="category-image" style={styles}>
                                <img src={`/images/${item.image}`} key={index++} alt={`${item.image}`}/>
                            </div>
                            <br/>
                        </div>
                    </div>
                )
            })
                
            
        }
    }

    return (
        <div>

            {getSelectCategory(props)}
            
        </div>
    );
};

export default ShowCategories;