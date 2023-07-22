import { Box } from '@mui/material';
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







const Chart = () => {
  return (
    <Box  sx={{height:'80px', width:'80px'}}>
      <ResponsivePie
        data={data}
        margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
        innerRadius={0.7}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        enableArcLabels={false}
        enableArcLinkLabels={false}
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
