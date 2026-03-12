const express = require('express')
const app = express();
let portName = 3451

const musicDetails = [
    {
        id : '1',
        Title   : 'Ogo',
        Artists: 'Dunsin Oyekan feat Theophilus Sunday',
        duration: "10:48",
        Image: 'https://cdn-images.dzcdn.net/images/cover/afc73be40e9c9a104db672c332454cdc/500x500.jpg'

    },
    {
        id : '2',
        Title   : 'Firm Foundation (He Wont)',
        Artists: 'Chandler David Moore feat Cody Carnes ',
        duration: "8:44",
        Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf66-erBriQIWzuvQk_QazTth6Q4N4XtHsew&s'

    },
    {
        Title   : 'Olorun Agbaye - You Are Mighty',
        Artists: 'Nathaniel Bassey feat.Chandler David Moore and oba',
        duration: "8:44",
        Image: 'https://cdn-images.dzcdn.net/images/cover/98d76469ca0c47205e24600a3cfb10b6/500x500.jpg'

    },
    {
        id : '3',
        Title   : 'Miracle No Dey Tire Jesus',
        Artists: 'Moses Bliss ft. Festizie & Chizie',
        duration: "2:46",
        Image: 'https://share.google/muRy01u9UdxkSKfVb'

    },
    {
        id : '4',
        Title   : 'Dependable God',
        Artists: 'Victor Thompson',
        duration: "3:52",
        Image: 'https://images.genius.com/797b037654b1a66c86a390fb08dc9f9f.1000x1000x1.png'

    },
    {
        id : '5',
        Title   : 'See What the Lord Has Done (Live)',
        Artists: 'Nathaniel Bassey',
        duration: "3:52",
        Image: 'https://images.genius.com/797b037654b1a66c86a390fb08dc9f9f.1000x1000x1.png'

    },
    {
        id : '6',
        Title   : 'You Are Yahweh',
        Artists: 'Steve Crown',
        duration: "6:30",
        Image: 'https://f4.bcbits.com/img/a1699288983_16.jpg'

    },
    {
        id : '7',
        Title   : 'Omemma',
        Artists: 'Chandler Moore’s',
        duration: "5:42",
        Image: 'https://images.genius.com/ba05e62cdb73ee2c1db384fc35c58df1.1000x1000x1.jpg'

    },
    {
        id : '8',
        Title   : 'Olorun Ti Ko Ni Ibere"',
        Artists: 'OhEmGee Choir and OkikiOluwalarami. ',
        duration: "18:30",
        Image: 'https://i.ytimg.com/vi/IiiV46CESyU/maxresdefault.jpg'

    },
    {
        id : '9',
        Title   : 'Praise',
        Artists: 'Brandon Lake, Chris Brown, Chandler Moore, Cody Carnes, Pat Barrett, and Steven Furtick',
        duration: "5:4",
        Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYT1wyrvSRbEI_GboxStpB7lyE7xcNwowhzw&s'

    },
    {
        id : '10',
        Title   : 'Ajegunle to Forbes',
        Artists: 'Ibquake',
        duration: "1:48",
        Image: 'https://i.scdn.co/image/ab67616d0000b27389c8f035dc8218ae262d32ac'

    },
]


    app.get('/music', (req, res) => {
        res.send(musicDetails)
        // console.log(musicDetails);
        
    } )
app.listen(portName, () => {
    console.log(`i am working on${portName}`);
    
})