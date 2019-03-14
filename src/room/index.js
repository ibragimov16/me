import React, {Component} from 'react'
import './room.css'

export default class Room extends Component{
    constructor(props){
        super(props);
        this.state = {
            tables: [1,2,3,4,5]
        }
    }
    CreateNewTable = () =>{
        this.state.tables.push(this.state.tables.length+1)
        this.forceUpdate()
    }
    render(){
        const { tables } = this.state
        return(
            <div className="content">
                <div className="row">
                    {tables.map((table, index) => {
                        return(
                            <div className="col-lg-2" key={index}>
                                <div className="table-card">Стол № {index+1}</div>
                            </div>
                        )
                    })}
                    <div className="col-lg-2">
                        <div className="table-card new-table" onClick={this.CreateNewTable}><b>+</b></div>
                    </div>
                </div>
            </div>
        )
    }
}