import { Line, LineChart, Tooltip, XAxis} from 'recharts'
import React from 'react'

const statistik =()=> {
    
    const data= [ {
        "nama": "Dragon Slayer",
        "genre": "RPG",
        "rating": 4.5,
        "platform": ["Android", "iOS"],
        "harga": "Gratis dengan pembelian dalam aplikasi"
      },
      {
        "nama": "Space Invaders Redux",
        "genre": "Arcade",
        "rating": 3.8,
        "platform": ["Android"],
        "harga": "Gratis"
      },
      {
        "nama": "Dungeon Quest",
        "genre": "Adventure",
        "rating": 4.2,
        "platform": ["iOS"],
        "harga": "$2.99"
      },
      {
        "nama": "Racing Rivals",
        "genre": "Racing",
        "rating": 4.0,
        "platform": ["Android", "iOS"],
        "harga": "Gratis dengan pembelian dalam aplikasi"
      },
      {
        "nama": "Empire Builder",
        "genre": "Strategy",
        "rating": 4.6,
        "platform": ["iOS"],
        "harga": "$4.99"
      }]
    return(
<LineChart width={800} height={800} data={data}>
<Line dataKey={nama} stroke='red'/>
<Line dataKey={genre} stroke='green'/>
<Line dataKey={platform} stroke='yellow'/>
<Line dataKey={harga} stroke='purple'/>
<XAxis/>
<Tooltip/>
</LineChart>
    );
};

export default statistik;