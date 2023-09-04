import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import * as worldMap from '@highcharts/map-collection/custom/world.topo.json';
import clusterData from '../../data/clusterData.json';

import markerClusters from "highcharts/modules/marker-clusters";
markerClusters(Highcharts);

export const ClusterMap = () => {

    const options = {
        chart: {
            map: worldMap
        },
        title: {
            text: 'Cluster map demo',
            align: 'center'
        },
        mapNavigation: {
            enabled: true
        },
        colorAxis: {
            min: 0,
            max: 20
        },
        plotOptions: {
            mappoint: {
                cluster: {
                    enabled: true,
                    allowOverlap: false,
                    animation: {
                        duration: 450
                    },
                    layoutAlgorithm: {
                        type: 'grid',
                        gridSize: 70
                    },
                    zones: [{
                        from: 1,
                        to: 4,
                        marker: {
                            radius: 13
                        }
                    }, {
                        from: 5,
                        to: 9,
                        marker: {
                            radius: 15
                        }
                    }, {
                        from: 10,
                        to: 15,
                        marker: {
                            radius: 17
                        }
                    }, {
                        from: 16,
                        to: 20,
                        marker: {
                            radius: 19
                        }
                    }, {
                        from: 21,
                        to: 100,
                        marker: {
                            radius: 21
                        }
                    }]
                }
            }
        },
        series: [{
            name: 'Europe',
            showInLegend: false
        }, {
            type: 'mappoint',
            name: 'Cities',
            data: clusterData,
            marker: {
                lineWidth: 1,
                lineColor: '#fff',
                symbol: 'mapmarker',
                radius: 8
            },
            dataLabels: {
                verticalAlign: 'top'
            }
        }]
    };

    return <HighchartsReact constructorType='mapChart' highcharts={Highcharts} options={options} />;
}