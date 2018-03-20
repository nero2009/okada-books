import React, { Component } from 'react'

//Components
import Select from '../../components/Select/Select.jsx'
import ShowCategories from '../../components/ShowCategories/ShowCategories.jsx'


const BOOKS_URL= 'http://localhost:3008/books'



class Books extends Component {

    constructor(props){
        super(props)
        this.state={
            books:[],
            category:''
           
        }

    }

    componentDidMount() {
   
            fetch(BOOKS_URL,{method:'GET'})
            .then(response => response.json())
            .then(json=>{
                this.setState({
                    books:json
                })
                
            })
            .catch(error=>{
                throw error
            })
    }

    handleChange=(event)=>{
        this.setState({
            category:''
        })
        this.setState({
            category:event.target.value
        })
        
    }


    render () {
        const { category, books } = this.state
        
        let selectedCategory= this.state.books.filter((book)=>{
            return book.category === category;
        })

        let uniqueCategory = [...new Set(this.state.books.map((book)=>book.category))]
        
        return (
            
            <div className="container">
                <div className="row">
                    <div className= "col-md-6">
                        <Select handleChange={this.handleChange} category={this.state.category} uniqueCategory={uniqueCategory} label="Please select a category"/>
                    </div>
                    <div className="col-md-6">
                        <ShowCategories selectedCategory={selectedCategory}  books={books}/>
                    </div>
                </div>
              
            </div>
        )
    }
}

export default Books