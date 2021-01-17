import React, {Component, Fragment} from 'react';
import Navbars from "../Navbars/Navbars";
import axios from "axios";

class App extends Component {
    state = {
        data:[]
    }
    componentDidMount() {
        axios.get('https://ecommerce-7-api.itpark.edu.kg/api/products/?page_size=3').then((res)=>{
            const result = res.data.results
            console.log(result)
        })
    }
    render() {
        return (
            <Fragment>
                <Navbars/>

            </Fragment>
        );
    }
}

export default App;