import axios from 'axios';
import { Card, Button } from "react-bootstrap";
import React, { Component } from 'react';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Listkategori from './Listkategori';


export default class Produk extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    menus: [],
    selectkate : 'Makanan',
  }

  componentDidMount() {
    axios.get('http://localhost:5000/products?category.nama='+this.state.selectkate)
      .then(res => {
        const menus = res.data;
        this.setState({ menus })
      })
      .catch(error => {
        console.log(error);
      })
  }

  pilihkategori = (value) => {
      this.setState({
        selectkate : value,
        menus : []
      })

      axios.get('http://localhost:5000/products?category.nama='+value)
      .then(res => {
        const menus = res.data;
        this.setState({menus});
      })
    
  }


  render() {
    const data = this.state.menus;
    return (
      <div>
        <p>{this.state.selectkate}</p>
        <div className='row my-3'>
          <div className='col-sm-2'>
            <Listkategori pilihkategori= {this.pilihkategori} katepilih={this.state.selectkate} />
          </div>
          <div className='col-sm-8'>
            <div className='row'>
              {
                data.map(list =>
                  <div className='col-sm-4'>
                    <Card className="mt-3 shadow">
                      <Card.Img variant="top" src={'assets/images/' + list.category.nama + '/' + list.gambar} />
                      <Card.Body className='text-center'>
                        <Card.Title>{list.nama}</Card.Title>
                        <Card.Text>
                          <p>Rp.{list.harga}</p>
                        </Card.Text>
                        <Button variant="primary">Pesan Sekarang  <FontAwesomeIcon icon={faHome} /></Button>
                      </Card.Body>
                    </Card>
                  </div>
                )
              }
            </div>
          </div>
        </div>

      </div>
    )
  }
}
