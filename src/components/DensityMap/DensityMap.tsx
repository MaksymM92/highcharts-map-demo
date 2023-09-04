import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsMap from 'highcharts/modules/map';
import * as worldMap from '@highcharts/map-collection/custom/world.topo.json';

// Line below is needed to Initialize the Highmaps module
highchartsMap(Highcharts);

export const DensityMap = () => {

    const options = {
        chart: {
            map: worldMap,
        },
        title: {
            text: 'Density Map Demo',
        },
        mapNavigation: {
            enabled: true,
        },
        colorAxis: {
            dataClasses: [
                {
                    to: 3,
                },
                {
                    from: 3,
                    to: 10
                },
                {
                    from: 10,
                    to: 30,
                },
                {
                    from: 30,
                    to: 100
                }
            ]
        },
        series: [
            {
                name: 'Country',
                data: [
                    ['is', 3],
                    ['us', 2],
                    ['se', 70],
                    ['ca', 22],
                    ['fr', 40],
                    ['ar', 100],
                    ['au', 22]
                ]
            },
        ],
    };

    return <HighchartsReact constructorType='mapChart' highcharts={Highcharts} options={options} />
}