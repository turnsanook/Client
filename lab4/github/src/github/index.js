import React,{Component} from 'react'
import axios from "axios";

class Github extends Component {

    state = { user: 'john', data:''}

    componentDidMount = () => this.fetchUser()

    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value });
    }
    changeuser = (username) => {
        this.setState({
            user: username,
        });
       this.fetchUser()
        console.log(this.state.data)
    }
 
    fetchUser = () => {
        axios.get(`https://api.github.com/users/${this.state.user}`)
            .then(response => {
                this.setState({data: response.data})
                console.log(response.data)
            })
    }
 
    render() {
        const {data} = this.state
            return ( 
            <div>
                <input type="text" name="username" value="" onChange={this.handleChange} />
                <button onClick={this.changeuser(this.state.user)}>find</button>

                {data.id}: {data.name} <img src={data.avatar_url} alt="avatar" width="50px"/> 
            </div> )
    }
 }
 
 export default Github