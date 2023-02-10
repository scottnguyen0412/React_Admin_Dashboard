import { ResponsiveGeoMap } from '@nivo/geo'
import {useTheme} from '@mui/material';
import { colorTokens } from '../theme';
import {geoFeatures} from '../data/mockGeoFeature.js';
import {mockGeographyData as data} from '../data/fakeData.js';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const GeoChart = ({isDashboard = false}) => {

    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);
    return (
    <ResponsiveGeoMap
        data={data}
        features= {geoFeatures.features}
        theme = {{
            axis: {
                domain: {
                    line: {
                        stroke: colors.grey[100],
                    }
                },
                legend: {
                    text: {
                        fill: colors.grey[100]
                    }
                },
                ticks: {
                    line: {
                        stroke: colors.grey[100],
                        strokeWidth: 1
                    },
                    text: { 
                        fill: colors.grey[100]
                    }
                }
            },
            legends: {
                text: {
                    fill: colors.grey[100]
                }
            },
        }}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        // zoom in/zoom out
        projectionScale={isDashboard ? 40 : 150}
        projectionTranslation={isDashboard ? [0.49, 0.6] : [ 0.5, 0.5 ]}
        projectionRotation={[ 0, 0, 0 ]}
        fillColor="#eeeeee"
        borderWidth={1.5}
        borderColor="#e056fd"

        legends= {
            // if is not dashboard then have default value. Otherwise is undefined
            !isDashboard
            ? [
                {
                  anchor: "bottom-left",
                  direction: "column",
                  justify: true,
                  translateX: 20,
                  translateY: -100,
                  itemsSpacing: 0,
                  itemWidth: 94,
                  itemHeight: 18,
                  itemDirection: "left-to-right",
                  itemTextColor: colors.grey[100],
                  itemOpacity: 0.85,
                  symbolSize: 18,
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemTextColor: "#ffffff",
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]
            : undefined
        }
    />
    )
}

export default GeoChart;