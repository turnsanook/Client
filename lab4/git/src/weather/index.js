import React,{Component} from 'react'
import axios from "axios";

class Weather extends Component {

    state = { country: 'thailand',city:'phuket', data:'', loading: false}

    componentDidMount = () => this.getWeather(this.state.country,this.state.city)

    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value });
    }

    getWeather = (country,city) => {
        this.setState({loading: true})
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=df81c8db7912919c73c5480a9f36ec71`)
            .then(response => {
                this.setState({data: response.data, loading: false})
                console.log(response.data)
            })
    }
 
    render() {
        const {data} = this.state
            if(this.state.loading){
                return <p>loading</p>
            }
            return ( 
                <div>
                    <input type="text" name="country" value="" onChange={this.handleChange} />
                    <input type="text" name="city" value="" onChange={this.handleChange} />
                    <button onClick={() => {this.getWeather(this.state.country,this.state.city)
                }}>find</button>
                {data.name}
                </div> )
    }
 }
 
 export default Weather