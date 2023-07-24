import { Box, useTheme } from '@mui/material';
import { ResponsivePie } from '@nivo/pie'
const data = [
  {
    "id": "rust",
    "label": "rust",
    "value": 173,
    "color": "hsl(88, 70%, 50%)"
  },
  {
    "id": "lisp",
    "label": "lisp",
    "value": 323,
    "color": "hsl(15, 70%, 50%)"
  },
  {
    "id": "go",
    "label": "go",
    "value": 384,
    "color": "hsl(212, 70%, 50%)"
  },
  {
    "id": "make",
    "label": "make",
    "value": 420,
    "color": "hsl(311, 70%, 50%)"
  },
  {
    "id": "hack",
    "label": "hack",
    "value": 209,
    "color": "hsl(92, 70%, 50%)"
  }
]







// eslint-disable-next-line react/prop-types
const Chart = ({scheme}) => {

  const theme = useTheme()
  return (
    <Box  sx={{height:'70px', width:'80px'}}>
      <ResponsivePie
        data={data}
        colors={{ scheme:scheme }}

        margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
        innerRadius={0.7}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        enableArcLabels={false}
        enableArcLinkLabels={false}

        theme={{
        "axis": {
          "domain": {
            "line": {
              "stroke": theme.palette.text.primary,
              "strokeWidth": 1
            }
          },
          "legend": {
            "text": {
              "fontSize": 12,
              "fill": theme.palette.text.primary,
              "outlineWidth": 0,
              "outlineColor": "transparent"
            }
          },
          "ticks": {
            "line": {
              "stroke": theme.palette.text.primary,
              "strokeWidth": 1
            },
            "text": {
              "fontSize": 11,
              "fill": theme.palette.text.primary,
              "outlineWidth": 0,
              "outlineColor": "transparent"
            }
          }
        },
        "grid": {
          "line": {
            "stroke": "#dddddd",
            "strokeWidth": 1
          }
        },
        "legends": {
          "title": {
            "text": {
              "fontSize": 11,
              "fill": theme.palette.text.primary,
              "outlineWidth": 0,
              "outlineColor": "transparent"
            }
          },
          "text": {
            "fontSize": 11,
            "fill": theme.palette.text.primary,
            "outlineWidth": 0,
            "outlineColor": "transparent"
          },
          "ticks": {
            "line": {},
            "text": {
              "fontSize": 10,
              "fill": theme.palette.text.primary,
              "outlineWidth": 0,
              "outlineColor": "transparent"
            }
          }
        },
        "annotations": {
          "text": {
            "fontSize": 13,
            "fill": theme.palette.text.primary,
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
          },
          "link": {
            "stroke": "#000000",
            "strokeWidth": 1,
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
          },
          "outline": {
            "stroke": "#000000",
            "strokeWidth": 2,
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
          },
          "symbol": {
            "fill": "#000000",
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
          }
        },
        "tooltip": {
          "container": {
            "background": theme.palette.background.default,
            "fontSize": 12
          },
          "basic": {},
          "chip": {},
          "table": {},
          "tableCell": {},
          "tableCellValue": {}
    }

      }}




        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
    </Box>
  );
}

export default Chart;
