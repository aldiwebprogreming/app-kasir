import axios from 'axios';
import React, { Component } from 'react';
import { ListGroup } from "react-bootstrap";
import { faHome, faCoffee, faCheese, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/style.css";

const Icon = ({ id }) => {
    if (id == 1) {
        return (
            <FontAwesomeIcon icon={faUtensils} />
        )
    } else if (id == 2) {
        return (
            <FontAwesomeIcon icon={faCoffee} />
        )
    } else {
        return (
            <FontAwesomeIcon icon={faCheese} />
        )
    }
}

class Listkategori extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        kategori: [],
    }

    componentDidMount() {
        axios.get('http://localhost:5000/categories')
            .then(res => {
                const kategori = res.data;
                this.setState({ kategori });
            })
            .catch(error => {
                console.log(error);
            })
    }

  



    render() {
        const kate = this.state.kategori;
        const chenga = this.props.pilihkategori;
        const katepilih = this.props.katepilih;

        return (
            <div>
                <ListGroup>
                    {
                        kate.map(listkat =>
                            <ListGroup.Item key={listkat.id} onClick={()=> chenga(listkat.nama)} className="">
                                <Icon id={listkat.id} /> {listkat.nama}
                            </ListGroup.Item>
                        )
                    }
                </ListGroup>
            </div>
        );
    }
}

export default Listkategori;