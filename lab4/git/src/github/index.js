import React,{Component} from 'react'
import axios from "axios";

class Github extends Component {

    state = { user: 'john', data:'',find:''}

    componentDidMount = () => this.fetchUser()

    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value });
    }

    fetchUser = (USER) => {
        axios.get(`https://api.github.com/users/${USER}`)
            .then(response => {
                this.setState({data: response.data})
                console.log(response.data)
            })
    }
 
    render() {
        const {data} = this.state
            return ( 
            <div>
                <input type="text" name="find" onChange={this.handleChange} />
                <button onClick={() => {this.setState({
                    find : this.props.find
                });this.fetchUser(this.state.find)
            }}>find</button>
                {data.id}: {data.name} <img src={data.avatar_url} alt="avatar" width="50px"/> 
            </div> )
    }
 }
 
 export default Github