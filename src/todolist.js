import React, { Component } from 'react';
import TodoItems from './TodoItems';

import './TodoList.css'

export default class Todolist extends Component {
    constructor(props){
        super(props);

        this.state = {
            items: []
        };

        this.addItem=this.addItem.bind(this);
        this.deleteItem=this.deleteItem.bind(this);
    }

    addItem(e){
        if(this._InputElement.value!==""){
            var Newitem = {
                text:this._InputElement.value,
                key:Date.now()
            };

            this.setState((prevState) =>{
                return{
                    items: prevState.items.concat(Newitem)
                };
            });
        }
        this._InputElement.value= "";
        e.preventDefault();
    }
    
    deleteItem(key){
        var filtereditems = this.state.items.filter(function(item){
            return (item.key !== key)
        });
        this.setState({
            items:filtereditems
        })
    }
    
    
    render() {
        return (
            <div className="todolistmain">
                <div className="todoheader">
                    <form onSubmit={this.addItem} >
                        <input  ref={(a)=>this._InputElement = a}
                                placeholder="Jot it down"
                         />
                        <button type="submit" >Add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items} 
                            delete={this.deleteItem}/>
            </div>
        )
    }
}
