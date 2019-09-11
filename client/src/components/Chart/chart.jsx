import React, {Component} from 'react';
import './chart.css';
import {MDBCol, MDBRow, MDBListGroup, MDBListGroupItem, 
} from "mdbreact";
import TopChart from './TopChart/Topchart';

class Chart extends Component {

    state = {
        chart: [],
        chartName: this.props.chartname || 'melon',
    };

    componentDidMount = () => {
        fetch(`/api/chart/${this.props.chartname}`)
        .then(res => res.json())
        .then(json => this.setState({chart: json.data}, () => console.log(`${this.props.chartname} Data api fetched...`, json)));
    }


    render(){
        return (
            <>
            <TopChart chartname={this.props.chartname}/>
            
            <MDBCol size="12" xl="10" lg="11" md="11" sm="12" className="chart">
                <MDBRow>
                    <MDBCol size="12" xl="12" lg="12" md="12" sm="12">
                        <MDBListGroup>
                            {this.state.chart.map(v => 
                                <MDBListGroupItem key={v.rank}>
                                <span className="music_rank" size="1">{v.rank}</span>
                                <span className="albug_img">
                                    <img src=""
                                        width="58" height="58" />    
                                </span>
                                <span className="music_info   col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                    <div>
                                    <p className="music_title" >{v.title}</p>
                                    <p className="music_artist">{v.artist}</p>
                                    </div>
                                </span>
                                <span className="music_link   offset-xl-2 offset-lg-2 offset-md-3 offset-3 col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1">
                                    <a className="youtube">
                                        <i className="fab-fa-youtube"></i>
                                    </a>
                                </span>
                                <span className="add_button   col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1">
                                    <a className="playlist_add">
                                    <i className="fab fa fa-share-square"></i>
                                    </a>
                                </span>
                                </MDBListGroupItem>
                            )}
                        </MDBListGroup>
                    </MDBCol>

                </MDBRow>                
            </MDBCol>

            </>
          );
    }
  
}

export default Chart;
