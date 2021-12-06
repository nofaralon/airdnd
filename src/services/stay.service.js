import { storageService } from './async-storage.service'
import { storage } from './storage.service'
import { utilService } from './util.service'
// const axios = require('axios')
// import { httpService } from './http.service'


const STAY_KEY = 'staysDB';
// const STAY_URL = 'http://localhost:3000/api/stay/'

export const stayService = {
    query,
    getById,
    remove,
    save,
    getEmptyStay


}
var gStays = []
_createStays()


async function query(filterBy) {
    return storageService.query(STAY_KEY)

    // return httpService.get(`stay`, filterBy)

}

async function getById(id) {
    console.log(typeof id);
    return storageService.get(STAY_KEY, id)
        // try {
        //     const res = await axios.get(STAY_URL + id)
        //     return res.data

    // } catch (err) {
    //     console.log(err);
    // }
    // const stay = httpService.get(`stay/${id}`)
    // return stay


}

async function remove(id) {
    return storageService.remove(STAY_KEY, id)

    // try {
    // const res = await axios.delete(STAY_URL + id)
    // return res.data

    // } catch (err) {
    //     console.log(err);
    // }

    // return httpService.delete(`stay/${id}`)
}

async function save(stay) {
    const savedStay = (stay._id) ? storageService.put(STAY_KEY, stay) : storageService.post(STAY_KEY, stay)
    return savedStay;
    // try {
    //     if (stay._id) {
    //         const res = await axios.put(STAY_URL + `${stay._id}`, stay)
    //         return res.data
    //     } else {
    //         const res = await axios.post(STAY_URL, stay)
    //         return res.data
    //     }

    // } catch (err) {
    //     console.log(err);
    // }

    // if (stay._id) {
    //     const addedStay = await httpService.put(`stay/${stay._id}`, stay)
    //     return addedStay

    // } else {
    //     const addedStay = await httpService.post(`stay`, stay)
    //     return addedStay
    // }


}

function getEmptyStay() {
    return {
        _id: '',
        name: '',
        imgUrls: ['', ''],
        price: null,
        summary: '',
        space: '',
        acces: "",
        around: "",
        notes: "",
        transit: "",
        capacity: null,
        bathrooms: null,
        beds: null,
        amenities: [],
        host: {
            _id: '',
            fullname: '',
            imgUrl: '',
        },
        loc: {
            country: '',
            countryCode: '',
            address: '',
            lat: null,
            lng: null
        },
        type: '',
        reviews: [],
        likedByUsers: []

    }
}

function _createStays() {
    var stays = storage.load(STAY_KEY)
    if (!stays || !stays.length) {
        stays = [{
                "_id": "29092",
                "name": "Glass cottage with Hot tub Grænn",
                "imgUrls": [
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638353763/airdnd/f9ab2331-d196-4a02-b58b-4f2ff8cb5a32_qfxc2i.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638353813/airdnd/795ff2d7-a23a-41db-a749-9e9d24469e0a_iihiyy.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638353775/airdnd/756d44e9-7f41-42ea-b7a0-e2e0b6e3a232_cwkjzz.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638353774/airdnd/48633eb8-6610-44bb-a7ea-6f3e0ab5580e_asacpm.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638353772/airdnd/4dc2184c-d486-4b2a-addc-c3a9cc919045_nwe5eh.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638353769/airdnd/55a0ef5e-d637-48b5-ace1-c7674a125315_eipvdi.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638354067/airdnd/0781019a-fedd-4315-98e9-df9321dee7b6_rlmy66.jpg"
                ],
                "sleep": ["https://res.cloudinary.com/di0utpbop/image/upload/v1638353774/airdnd/48633eb8-6610-44bb-a7ea-6f3e0ab5580e_asacpm.jpg"],
                "price": 1667.00,
                "summary": "We are located on a lava desert in the south of Iceland. 5 minutes from the small town of Hella, close to all the popular attractions that southern Iceland has to offer, but also in a secret and secluded location.",
                "space": "The experience we offer is unique. The bedroom is entirely made of glass, You can sleep under the stars in comfort and warmth. The bathroom offers views of the largest Icelandic volcanoes, Hekla, eyjafjallajökull, bláfjöll, tindfjöll…",
                "capacity": 2,
                "bedroom": 1,
                "beds": 1,
                "bathrooms": 1,
                "amenities": ["Kitchen",
                    "Wireless Internet", "TV", "Microwave", "Patio or balcony", "Hot tub"
                ],
                "host": {
                    "_id": "536581",
                    "fullname": "Ari",
                    "imgUrl": "https://thispersondoesnotexist.com/"
                },
                "acces": "A fully equiped condo for you to enjoy the Nordic lifestyle",
                "note": "We are nor resposible for the nrthen lights, so if you do not get to see it, please understand...",
                "transit": "Hella is the perfect place to spend the day visiting the south of Iceland. A central position! We are an hour from Vík, Geysir, Gullfoss, and it is also the starting point to get to Landmannalaugar.",
                "around": "We are located in Hella, a small Icelandic town of 800 inhabitants. We have a swimming pool with jacuzzi, gym, sauna, water slides, gas station, and more!",
                "loc": {
                    "country": "Iceland",
                    "countryCode": "ISL",
                    "address": "Hella ,Iceland",
                    "lng": -20.39845713535863,
                    "lat": 63.841659597974854
                },
                "type": "outdoors",
                "reviews": [{
                    "id": "157859",
                    "txt": "Place was amazing. We saw the northern lights. Magical. Highly recommend. Hopefully you stay there when there is no overcast so you can see the lights.",
                    "rate": 5,
                    "date": "Jun 07 2020",
                    "by": {
                        "_id": "u100753482399",
                        "fullname": "James",
                        "imgUrl": "https://thispersondoesnotexist.com/"
                    }
                }, {
                    "id": "154559",
                    "txt": "The glass cottage was absolutely beautiful! Unfortunately, we were not blessed with the northern lights but had a lovely view of the stars.",
                    "rate": 5,
                    "date": "Apr 03 2021",
                    "by": {
                        "_id": "u100753482399",
                        "fullname": "Charlie",
                        "imgUrl": "https://source.unsplash.com/random/100x100/?face"
                    }
                }],
                "likedByUsers": ["Justin", "Racha", "Bjorn", "Bobo", "James", "Charlie"]
            },



            {
                "_id": "295714092",
                "name": "Magical Stay near Seljalandsfoss Waterfall",
                "imgUrls": [
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638353023/airdnd/36119b56-0329-4e7c-9c6a-3870a131ab55_sg81nq.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638353049/airdnd/676d353d-900a-4eed-947d-15ab64e2c8bc_zv29ia.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638353021/airdnd/9e791aab-ed5d-4da7-bf85-44f2e26170f8_jxc9bm.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638353015/airdnd/f142060f-e190-4a3f-bd03-4f8fea943d80_fnyqux.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638353012/airdnd/007f6317-3cec-419d-aff4-bc6e8b7013b4_axdpw1.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638353010/airdnd/2e2591c5-acec-4166-b38a-f3a14a1fef25_avxfi6.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638353010/airdnd/163fbf5d-8ebd-4a32-b76b-67472969888b_qqia33.jpg"
                ],
                "sleep": ["https://res.cloudinary.com/di0utpbop/image/upload/v1638353012/airdnd/007f6317-3cec-419d-aff4-bc6e8b7013b4_axdpw1.jpg"],
                "price": 667.00,
                "summary": "Want to experience an amazing and cozy atmosphere near the popular Seljalandsfoss Waterfall?! Our brand new cottages are located within 2 kilometers from the waterfall Seljalandsfoss and Gljúfrabúi. The cottages were built late 2019 and are comfortably designed to make you feel home away from home and to enjoy the amazing nature that the south coast of Iceland has to offer. If you are lucky you might even see the Northern Lights dancing in the sky on a cold winter night!",
                "space": "The cottage are brand new including new appliances. You will have a cozy living room with a flat screen TV, WiFi and a kitchenette with a stove, microwave, kettle, coffee maker, pots and pans and utilities. There are 2 Bedrooms and the cottage can comfortably sleep 4 Guests.",
                "capacity": 4,
                "bedroom": 2,
                "beds": 2,
                "bathrooms": 1,
                "amenities": ["Kitchen",
                    "Wireless Internet", "TV", "Microwave"
                ],
                "host": {
                    "_id": "536581",
                    "fullname": "Atli",
                    "imgUrl": "https://source.unsplash.com/random/100x100/?face"
                },
                "acces": "Private cottage, Free Wi-Fi, Free Parking, hairdryer, kitchenette. Breakfast can be offered for extra 19 EUR per person, for minimum 2 guests if booked. Please send us a message on Airbnb if you wish to book breakfast. Breakfast request must be sent to us with at least 2 days notice so we can prepare the breakfast for you.",
                "note": "Please note that we will send you an email 2 days prior arrival with the check in instructions. The email may end up in your junk/spam folder so please check that.",
                "transit": "It's easier to have a car to go around Islande, though it is possible to travel with buses : the bus 78 (from Akureyri to Siglufjörður) has a stop at 'Litli-Árskógssandur', which is 1.5km from our house.",
                "around": "Highlights in the area:. Beer spa & restaurant downtown: Bjórböðin. Whale watching & hot tubs by the beach 3km away: Hauganes. Ski resorts: Akureyri, Dalvík. Delicious fish soup in Dalvík: Gisli Eirikur Helgi Kaffihûs. Bird life, Hrísey Island, hiking and walking trails, northern lights and so much more to discover!",
                "loc": {
                    "country": "Iceland",
                    "countryCode": "ISL",
                    "address": "Hvolsvöllur ,Iceland",
                    "lng": -20.223351936097036,
                    "lat": 63.748324634546584
                },
                "type": "outdoors",
                "reviews": [{
                    "id": "1559",
                    "txt": "We really enjoyed our stay here. Warm and cozy.",
                    "rate": 5,
                    "date": "Jun 07 2019",
                    "by": {
                        "_id": "u100753482399",
                        "fullname": "Justin",
                        "imgUrl": "https://source.unsplash.com/random/100x100/?face"
                    }
                }],
                "likedByUsers": ["Justin", "Racha", "Bjorn", "Bobo"]
            },



            {
                "_id": "54856851",
                "name": "Sky sighting Iglúhús (Stay'in Árbakki)",
                "imgUrls": [
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638351327/airdnd/e3e6679a-adad-4634-9421-5499244d6391_ij2dw6.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638351317/airdnd/fbaf0eea-4657-4999-81de-973a13cb2f13_s8pm1x.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638351404/airdnd/5e009935-99f0-4947-bc86-3b03f449ae30_sf9u8f.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638351404/airdnd/63f70a0e-562b-42ad-a2bf-ea20f87633f6_iz6qqe.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638351348/airdnd/5ba54302-32b7-4dc4-b5b4-6e8bd9978949_gaa8c4.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638351335/airdnd/8c45e3b4-3875-4cca-b4e0-99abcf7a779c_hvrvmr.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638351323/airdnd/d61331b7-e380-421e-8117-4ebb7a07fc82_itlxll.jpg"
                ],
                "sleep": ["https://res.cloudinary.com/di0utpbop/image/upload/v1638351335/airdnd/8c45e3b4-3875-4cca-b4e0-99abcf7a779c_hvrvmr.jpg"],
                "price": 290.00,
                "summary": "The Iglúhús offers you the opportunity to live an original rural stay. By its exceptional location, its unique geodesic shape with glazed sides and roof and the simplicity of its equipment, experience a night 'under' the stars, the Northern Lights or the midnight sun from a warm and cozy bed.",
                "space": "The Iglúhús is equipped with a king size bed with eider down duvet, pillows and sheets. a table & two chairs kettle, toaster, coffee maker. tea, coffee. dishes, cutlery. water tanks (10L). a little guide book of the region. WiFi connection. toilet in a shed next door.",
                "capacity": 2,
                "bedroom": 1,
                "beds": 1,
                "bathrooms": 1,
                "amenities": ["Kitchen",
                    "Wireless Internet", "Hot tub"
                ],
                "host": {
                    "_id": "536581",
                    "fullname": "LoLa and bjorn",
                    "imgUrl": "https://source.unsplash.com/random/100x100/?face"
                },
                "acces": "Our house is easily accessible with any kind of car, even in winter.",
                "note": "NOTICE: no running water or shower.",
                "transit": "It's easier to have a car to go around Islande, though it is possible to travel with buses : the bus 78 (from Akureyri to Siglufjörður) has a stop at 'Litli-Árskógssandur', which is 1.5km from our house.",
                "around": "Highlights in the area:. Beer spa & restaurant downtown: Bjórböðin. Whale watching & hot tubs by the beach 3km away: Hauganes. Ski resorts: Akureyri, Dalvík. Delicious fish soup in Dalvík: Gisli Eirikur Helgi Kaffihûs. Bird life, Hrísey Island, hiking and walking trails, northern lights and so much more to discover!",
                "loc": {
                    "country": "Iceland",
                    "countryCode": "ISL",
                    "address": "Árskógssandur, Dalvík,Iceland",
                    "lng": -18.348283908813563,
                    "lat": 65.94148107219047
                },
                "type": "outdoors",
                "reviews": [{
                    "id": "159",
                    "txt": "Our favorite place in iceland! Lola was very kind.",
                    "rate": 4,
                    "date": "Jun 07 2017",
                    "by": {
                        "_id": "u1009",
                        "fullname": "ishitzu",
                        "imgUrl": "https://source.unsplash.com/random/100x100/?face"
                    }
                }],
                "likedByUsers": ["ishutzu", "Racha", "Momo"]
            },



            {
                "_id": "548249851",
                "name": "EYVÍK Cottage (central to the Golden Circle) #A",
                "imgUrls": [
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638348835/airdnd/e21f81a7-0205-44ed-8515-72ecb84723db_ki7der.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638348834/airdnd/220ef204-1717-414d-80bd-d1b621f4a398_tuwxrm.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638348832/airdnd/2c2bbbd3-8e19-4931-ba79-6158f974da95_be358a.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638348830/airdnd/8246ea4e-e746-4ff1-8cdb-06abdbf6b9a3_kvi3i4.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638348828/airdnd/764805ff-d0af-4038-82d2-663b9d48ee74_ybmz7u.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638348828/airdnd/3d00f1ff-0b00-4188-9c6e-c8d4a3c10b5b_gaio4t.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638348856/airdnd/718c9aa2-e2b0-492e-8b71-60f9d5ff8d5a_o0lmji.jpg"
                ],
                "sleep": ["https://res.cloudinary.com/di0utpbop/image/upload/v1638348856/airdnd/718c9aa2-e2b0-492e-8b71-60f9d5ff8d5a_o0lmji.jpg"],
                "price": 570.00,
                "summary": "This house is licensed and registered to accept Guests in Quarantine. We provide services such as food and wine delivery while in quarantine. Also we help our Guests with all their questions and inquiries they might have during the process. High performance disinfection process will be performed between Guests according to the Icelandic Health Department and EU legislation.",
                "space": "Amazing cottage with HOT TUB, warm interior and magical views. From the deck you can see HEKLA VOLCANO, the queen of Icelandic volcanoes. The cottage offers a Home-away-from-Home environment which is a traveler's dream.",
                "capacity": 4,
                "bedroom": 1,
                "beds": 1,
                "bathrooms": 1,
                "amenities": ["Kitchen",
                    "Wireless Internet", "washer", "Hot tub"
                ],
                "host": {
                    "_id": "57881",
                    "fullname": "Yohan",
                    "imgUrl": "https://source.unsplash.com/random/100x100/?face"
                },
                "acces": "Entire space is included in this rental. Please, make yourself at home.",
                "note": "Don‘t buy accommodation, buy experience!",
                "transit": "For the best experience, rent a car.",
                "around": "The views all around the cottage are magnificent with MOUNTAINS stretching out in the surroundings. There's 30 square meter private deck/patio which lies on two sides of the cottage equipped with a cozy HOT TUB (ready to use all year round) and a BBQ GRILL – Perfect for enjoying the spectacular views, star gazing and catching the NORTHERN LIGHTS. Enjoying the SUNRISE and the NATURE at the deck/patio is a rememberable EXPERIENCE. The cottage has of course FREE PARKING SPACE..",
                "loc": {
                    "country": "Iceland",
                    "countryCode": "ISL",
                    "address": "Selfoss,Iceland",
                    "lng": -20.95788025742186,
                    "lat": 63.96039497240088
                },
                "type": "outdoors",
                "reviews": [{
                    "id": "149",
                    "txt": "Once in a lifetime experience ",
                    "rate": 4,
                    "date": "Jun 07 2020",
                    "by": {
                        "_id": "u1009",
                        "fullname": "ishitzu",
                        "imgUrl": "https://source.unsplash.com/random/100x100/?face"
                    }
                }],
                "likedByUsers": ["ishutzu", "Racha", "Momo"]
            },

            {
                "_id": "5487332",
                "name": "Best Bayfront View. New construction w/ pool",
                "imgUrls": [
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638307941/airdnd/454ce990-c861-4ec2-9c21-160f9e4b8856_eqpdm4.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638307938/airdnd/4d978bf1-a10c-483d-b4e8-1a017c12a03c_esphgm.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638307936/airdnd/2318d12f-f05a-49d5-add4-b6ad315a9ed1_c9xr9g.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638307933/airdnd/d34045b2-3cf4-498d-9125-5c8dfde76dcb_bmqwyn.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638307931/airdnd/10b0c611-b149-45c4-bba1-e94be47ef8fc_novfvd.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638307928/airdnd/ff7f67d2-a69c-4579-bf8b-5f867d489f61_kmegej.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638308107/airdnd/470678b7-9e84-40cf-8263-3f373d2b2549_b3kr3v.jpg"
                ],
                "sleep": ["https://res.cloudinary.com/di0utpbop/image/upload/v1638308107/airdnd/470678b7-9e84-40cf-8263-3f373d2b2549_b3kr3v.jpg"],
                "price": 2200.00,
                "summary": "This 5 bedrooms, 5.5 bathrooms property is appointed with exquisite finishes and furniture throughout, heated pool, terrace, sonos system, outdoor BBQ and much more. Perfectly located less than 10 minutes driving to the beach and 20 minutes driving to the best of Miami Beach shopping and entertainment.",
                "space": "Fully equiped villa, any experince you have in mind, we got it, enjoy.",
                "capacity": 10,
                "bedroom": 5,
                "beds": 5,
                "bathrooms": 5,
                "amenities": ["Kitchen",
                    "TV", "Wireless Internet", "Microwave", "Security camera", "pool"
                ],
                "host": {
                    "_id": "511",
                    "fullname": "Ferony",
                    "imgUrl": "https://source.unsplash.com/random/100x100/?face"
                },
                "acces": "The entire villa is yours to enjoy except one closet in the master.",
                "note": "Residential Area. The Property is a residential neighborhood. Excessive noise at a level that disturbs the neighbors is prohibited. Code-Enforced Quiet Hours. Compliance with Code-Enforced Neighborhood Quiet Hours of 10 PM - 8 AM is required and the Guest is for any fines resulting from a violation. Music. Guests are prohibited from having a disc jockey (DJ) or live music on the Property, including inside the Property, outside, in the garage, and in any covered areas. Music devices, other than the provided Sonos, are prohibited.",
                "transit": "We recommend guests use Lyft and Uber.",
                "around": "Very safe and quiet neighborhood. House is gated",
                "loc": {
                    "country": "Florida",
                    "countryCode": "FL",
                    "address": "Miami, Florida, United States",
                    "lng": -80.15259684126534,
                    "lat": 25.845870068762853
                },
                "type": "villa",
                "reviews": [{
                    "id": "14",
                    "txt": "Was it all a dream?!",
                    "rate": 5,
                    "date": "Jun 07 2018",
                    "by": {
                        "_id": "u10",
                        "fullname": "Sharon",
                        "imgUrl": "https://source.unsplash.com/random/100x100/?face"
                    }
                }],
                "likedByUsers": ["mini-user"]
            },

            {
                "_id": "54331",
                "name": "Sextant | 2-Story Waterfront Penthouse | Heated Pool | 10 mins to Beach",
                "imgUrls": [
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638306687/airdnd/06dc19df-a748-4799-a557-9911b297351e_tdbbsu.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638306710/airdnd/b0d307a5-a1b7-4190-8f45-5fa6466172fb_gplusv.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638306687/airdnd/6b093271-7a03-4360-8c4a-32de4d8ceb55_g0g6wg.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638306687/airdnd/ce8124d0-636f-4bf8-bed8-153ca53551c5_y0jo24.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638306687/airdnd/f124ca64-8653-4918-83df-a36ac96079e0_erbdim.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638306687/airdnd/07e52f74-c39d-438f-8378-9fb9edaf8b66_d0niqq.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638306687/airdnd/b6c8f2f5-df1a-42cb-851b-8cf1c41d2a60_kj9qpg.jpg"
                ],
                "sleep": ["https://res.cloudinary.com/di0utpbop/image/upload/v1638306687/airdnd/b6c8f2f5-df1a-42cb-851b-8cf1c41d2a60_kj9qpg.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638306710/airdnd/b0d307a5-a1b7-4190-8f45-5fa6466172fb_gplusv.jpg"
                ],
                "price": 4500.00,
                "summary": "This 5000 SF Penthouse is quintessential Miami--over the top, but tasteful. Enjoy panoramic views of Biscayne Bay and the Atlantic Ocean to the East, and expansive city views of Miami Beach and Sunny Isles. The dramatic 25' ceilings flood the space with natural light, and make this unit feel even more spacious. For those who want privacy, this unit is the only one on the top two floors of the whole building.",
                "space": "We are thankful to be allowed to do short term in this neighborhood but ask that you respect our neighbors but following our house rules.",
                "capacity": 10,
                "bedroom": 6,
                "beds": 11,
                "bathrooms": 5,
                "amenities": ["Kitchen",
                    "TV", "Wireless Internet", "Microwave", "Security camera", "pool"
                ],
                "host": {
                    "_id": "511",
                    "fullname": "Raphael",
                    "imgUrl": "https://source.unsplash.com/random/100x100/?face"
                },
                "acces": "CHECK-IN & CHECK-OUT: Check-in is any time after 4PM and check-out is any time before 11AM. An early check-in or late check-out time may be available, please inquire about pricing at the time of booking.",
                "note": "Important note: The information is collected for screening and verification only and is not stored or used for any other purposes.",
                "transit": "We recommend guests use Lyft and Uber.",
                "around": "Central Miami at your feet",
                "loc": {
                    "country": "Florida",
                    "countryCode": "FL",
                    "address": "Miami, Florida, United States",
                    "lng": -80.15757502118096,
                    "lat": 25.853246740692718
                },
                "type": "villa",
                "reviews": [{
                    "id": "14",
                    "txt": "Such a big house, this is a dream...",
                    "rate": 5,
                    "date": "Jun 07 2020",
                    "by": {
                        "_id": "u102678",
                        "fullname": "shimo",
                        "imgUrl": "https://source.unsplash.com/random/100x100/?face"
                    }
                }],
                "likedByUsers": ["ishutzu", "Popory"]
            },

            {
                "_id": "231331",
                "name": "BEAUTIFUL 2BD ★ OVERLOOKING THE OCEAN ★BRICKELL",
                "imgUrls": [
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638305372/airdnd/91482620-67d1-41e8-a4d7-b032cfaf2a0e_vzmrkc.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638305372/airdnd/40b1260b-e112-4166-9686-428d9f15b26e_ib6sdq.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638305372/airdnd/d56acb73-6a9b-4ab5-80bf-ee35164435a6_ct9zkr.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638305373/airdnd/4a17855c-767e-4d43-ab23-a0d61b1737a5_yhesqn.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638305373/airdnd/d2ab974f-7f5f-45a7-89ff-abce81060081_nencdc.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638305373/airdnd/04f9d98a-5a08-45f9-9490-826da3e6cd69_wrkijn.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638305373/airdnd/699286a4-4fd0-40a7-a91f-6e48c7998fdb_gle0rs.jpg"
                ],
                "sleep": ["https://res.cloudinary.com/di0utpbop/image/upload/v1638305372/airdnd/d56acb73-6a9b-4ab5-80bf-ee35164435a6_ct9zkr.jpg"],
                "price": 1500.00,
                "summary": "Large 1,400 sq ft condo with high ceilings overlooks the bay from its floor to ceiling windows. Gorgeous views and pure design. Fully remodeled beautiful 2 Bedroom 2 Bathroom Condo in the heart of Brickell. Amazing ocean views! Has one King bed and a queen bed. This beautiful condo is steps from restaurants, cafés and nightclubs. Stay at the center of it all.",
                "space": "Large 1,400 sq ft condo with high ceilings overlooks the bay from its floor to ceiling windows.",
                "capacity": 5,
                "bedroom": 2,
                "beds": 2,
                "bathrooms": 2,
                "amenities": ["Kitchen",
                    "Washer",
                    "TV", "Wireless Internet", "Microwave", "Security camera", "Hot tub"
                ],
                "host": {
                    "_id": "511",
                    "fullname": "Raphael",
                    "imgUrl": "https://source.unsplash.com/random/100x100/?face"
                },
                "acces": "Entire apartment is for you to use. You also have access to all of the building's amenities.",
                "note": "Garbage – Trash chute is located next to units that end with 01 (1601,1701,1801…). Trash is to be disposed of properly. You must not leave garbage bags on the floor. Garbage bags are not left unattended in front of door or in stairwell.",
                "transit": "Everything is walking distance, electric scooters available all over Brickell for rent, Uber/lyft is also very convenient to use.",
                "around": "Close to Design District, Wynwood, and Miami Beach. Referred to as the 'Manhattan of the South', Brickell is home to the largest concentration of international banks in the United States, and home to many of Miami's top restaurants, shops and places of entertainment.",
                "loc": {
                    "country": "Florida",
                    "countryCode": "FL",
                    "address": "Miami, Florida, United States",
                    "lng": -80.19372162516402,
                    "lat": 25.77059222791051
                },
                "type": "apartment",
                "reviews": [{
                    "id": "1",
                    "txt": "Phew, that was awsome!!",
                    "rate": 5,
                    "date": "Jun 07 2021",
                    "by": {
                        "_id": "u106782",
                        "fullname": "Jordan",
                        "imgUrl": "https://source.unsplash.com/random/100x100/?face"
                    }
                }],
                "likedByUsers": ["shimo", "Racha", "Jordan"]
            },


            {
                "_id": "103108831",
                "name": "Exceptional Architect Loft - North Marais !",
                "imgUrls": [
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638301163/airdnd/24796636-fd35-4224-bdc0-df36b11bdf1a_pyrvkp.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638301164/airdnd/85ed1a10-91ad-4f0a-b7fe-b8ab09bf0040_cqyjzd.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638301163/airdnd/66f68766-1780-4aba-a85b-709b56e084cd_fhphmo.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638301164/airdnd/a984bc25-ee74-43d7-8d55-0df6bd94f3af_pdyhef.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638301163/airdnd/c894bc72-2639-4a48-9be0-e557c0a1fff3_pnv2cz.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638301163/airdnd/6998d2a8-4ae4-4bf0-a50d-b790b0d311fe_vnzcpy.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638301163/airdnd/0cf0d731-379c-4d13-b235-619511bb4a1c_x9xp5u.jpg"
                ],
                "sleep": ["https://res.cloudinary.com/di0utpbop/image/upload/v1638301163/airdnd/c894bc72-2639-4a48-9be0-e557c0a1fff3_pnv2cz.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638301164/airdnd/85ed1a10-91ad-4f0a-b7fe-b8ab09bf0040_cqyjzd.jpg"
                ],
                "price": 1000.00,
                "summary": "CODIV-19 : 1 mask/pers + hydroalcoholic gel are supplied upon request. The flat is entirely disinfected before each stay. Outstanding Atypical Architect Loft of 170m2 (i.e. 1900 sqft). 4 double bedrooms, 3 bathrooms, a huge living room + open Kitchen. Private Patio.",
                "space": "The loft is a 170m2 (about 1900 sq ft.) flat which has been totally refurbished by an architect and high quality / design materials and furniture. It has a huge living room with 2 sofas, a TV space, a fireplace for winter and a dining space. It has an open kitchen with all equipments and 4 double bedrooms with 4* Queen size beds (160x200), 3 bathrooms with toilets and private wardrobes. The kitchen is fully equipped with cooking piano, oven, microwave, 2 fridges, Nespresso machine, kettle, pans, toaster, washing machine, dryer, dishwasher, ...).",
                "capacity": 8,
                "bedroom": 4,
                "beds": 4,
                "bathrooms": 3,
                "amenities": ["Kitchen",
                    "Washer",
                    "TV", "Wireless Internet", "Microwave", "Security camera", "Heating"
                ],
                "host": {
                    "_id": "51100",
                    "fullname": "Rachel",
                    "imgUrl": "https://source.unsplash.com/random/100x100/?face"
                },
                "acces": "Guests have access to full apartment.",
                "note": "We are pet friendly!",
                "transit": "The area is one of the best for transports : 2 mins walk from Strasbourg Saint Denis Metro station. Metro line 4 (North / South) : Notre-Dame, Saint-Germain des près, Montparnasse (in 10 / 15min.) Metro ligne 8 / 9 (East-West) : Galeries Lafayettes, Opéra, Champs-Elysées, Tour Eiffel (in 15 / 20 min.). Airports : Roissy Charles de Gaulle, 50€ by taxi (40 min.), 12€ by bus or train (1h).",
                "around": "The loft is located between the canal Saint-Martin, the Sentier, and the Marais, 3 of the best Parisian districts. Canal Saint-Martin, is a hipster area perfect to have walks and food. Sentier used to be the place to buy clothes and is now a trendy area with the famous rue Montorgueil. The Marais is the oldest district of Paris with a lot of shops, restaurants, bars, etc.",
                "loc": {
                    "country": "France",
                    "countryCode": "FR",
                    "address": "Paris, Île-de-France, France",
                    "lng": 2.3439326463706607,
                    "lat": 48.872852349058235
                },
                "type": "apartment",
                "reviews": [{
                    "id": "15",
                    "txt": "Amazing!",
                    "rate": 5,
                    "date": "Apr 03 2021",
                    "by": {
                        "_id": "u1024",
                        "fullname": "user2",
                        "imgUrl": "https://source.unsplash.com/random/100x100/?face"
                    }
                }],
                "likedByUsers": ["Koko", "Irady", "Yarl", "Zommen"]
            },

            {
                "_id": "10317",
                "name": "Luxury apartment 80m2 with AC center of Marais",
                "imgUrls": [
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638300786/airdnd/91fef747-db11-47f0-a1e0-4186fc90d1e2_iboupe.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638300787/airdnd/486dd91a-a409-419f-bb79-d7fd6f3ff478_qfxdlx.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638300787/airdnd/31fe43d3-1a13-475a-920d-637cb86a56e8_mjgqvy.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638300786/airdnd/f3a01ca1-18a9-4b29-b186-132644b7f1e9_jft3tm.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638300786/airdnd/29372524-f82b-43ec-aed6-8754c4be16be_xyz0re.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638300786/airdnd/555f683d-bef5-4970-beda-8614c89595c4_et1uho.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638300786/airdnd/72c6b6f3-01e8-4dd1-9348-3def971248b7_mhkrvz.jpg"
                ],
                "sleep": ["https://res.cloudinary.com/di0utpbop/image/upload/v1638303726/airdnd/6158cff4-8dbc-4a07-9ae8-8d77cc593812_gehulb.jpg"],
                "price": 600.00,
                "summary": "Newly equipped with central air conditioning (May 2021) and a new king size bed in the second bedroom (July 2021) in the heart of the Marais Paris 4th district, in a building of the 17th Century, spacious and beautiful charming apartment with beams and wooden floors, high ceilings (80m2). Large living room with an open kitchen, 2 large bedrooms, a bathroom with washing machine and dryer. Wifi, large flat TV with Netflix and Amazon Video. Linen, towels and Codage amenities will be provided.",
                "space": "Magnificent apartment in the heart of the Marais, perfect choice for visiting Paris, its museums, its exhibitions, or for shopping or enjoying its restaurants and bars. New for 2021 season and to improve your comfort, my apartment has been equipped with central air conditioning: you will be able to set the temperature you want, room per room, with a remote controler. My apartment has solid oak parquet, beams, Farrow and Ball paintings and decorated with bright and warm colors, lighting from famous designers, Charles Eames furniture around the theme of street art, with originals works of Di bona, Toc-Toc... The apartment can comfortably accommodate 4 people and is located on the 3rd floor without elevator. The apartment is non-smoking and not accessible to pets.",
                "capacity": 4,
                "bedroom": 2,
                "beds": 2,
                "bathrooms": 1,
                "amenities": ["Wireless Internet", "Kitchen", "Dryer", "TV", "City skyline view"],
                "host": {
                    "_id": "516418",
                    "fullname": "Maya",
                    "imgUrl": "https://source.unsplash.com/random/100x100/?face"
                },
                "acces": "Check-in is between 3 p.m. and 9 p.m. and check-out is until 11 a.m. on the day of departure. You will have at your disposal several sets of keys... You will have at your disposal several sets of keys.",
                "note": "New for 2021, central air conditioning will improve the air quality and your level of comfort and let you choose the right temperature in each room.",
                "transit": "Metro stops: Hotel de ville (Lines 1 and 11), Château de Vincennes - La Défense (Line 1), Châtelet - Mairie des Lilas (Line 11). RER B (train) from Roissy Charles de Gaulle Airport (1h). Roissy Charles de Gaulle Airport by Taxi or Uber, 1h.",
                "around": "Places to visit: Notre Dame de Paris, 700m, Centre Georges Pompidou 700m (closed for renovation until 2024) Louvre Museum 1500m Place des Vosges, 800m. Restaurants: Restaurant 'Benedict' for tasty brunches and cocktails. Italian restaurant '4 pat'. Restaurant 'L'Alivi', Corsican specialities. Restaurant 'Tavline' Israeli specialties Restaurant 'Des gars dans la cuisine' french fresh cuisine",
                "loc": {
                    "country": "France",
                    "countryCode": "FR",
                    "address": "Paris, Île-de-France, France",
                    "lng": 2.345412038289177,
                    "lat": 48.862811614303716
                },
                "type": "apartment",
                "reviews": [{
                    "id": "60",
                    "txt": "Very helpful hosts. Cooked traditional...",
                    "rate": 4,
                    "date": "Apr 03 2021",
                    "by": {
                        "_id": "u103",
                        "fullname": "yuki",
                        "imgUrl": "https://source.unsplash.com/random/100x100/?face"
                    }
                }],
                "likedByUsers": ["Shimi", "freddy"]
            },

            {
                "_id": "1031755",
                "name": "Loft avec terrasse dans le coeur de Paris",
                "imgUrls": [
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638298338/airdnd/88523a4d-966a-4be0-8ba6-60f09c97535b_xszkuk.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638298339/airdnd/aa4ab4c8-8520-4f13-9f48-255d6036be83_do7tl3.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638298338/airdnd/3f01ef86-2784-4bf9-afc9-6d972f6c218c_xutjse.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638298338/airdnd/de097b80-7971-4986-8dcb-ec1f952416ac_oeuico.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638298338/airdnd/b9e69161-0e2d-410e-80fa-86fda9258c44_k5dgyf.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638298337/airdnd/0588ee6d-69e9-4882-a99c-36377754ebea_nemcsq.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638298337/airdnd/e70ceb47-fee5-4c5d-b623-82f7020a1afa_qjq7t9.jpg"
                ],
                "sleep": ["https://res.cloudinary.com/di0utpbop/image/upload/v1638298337/airdnd/e70ceb47-fee5-4c5d-b623-82f7020a1afa_qjq7t9.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638298337/airdnd/d8804ae1-47ff-429c-9673-8bc5b5924f79_imqyh8.jpg"
                ],
                "price": 870.00,
                "summary": "This loft was completely renovated in 2020 by a French architect. The ceiling height of 4 meters, its wooden beams and its 25 square meter terrace make it a totally unique apartment in the heart of Paris.",
                "space": "The building was built in 1451 for the attention of the Parisian bourgeoisie of the time. Everything was built accordingly, very wide door, huge windows, ceiling height of 4 meters, wooden floors, stone wall. The apartment has a large living room of approximately 35 m2. and a large table. The kitchen, completely new and perfectly equipped with everything you will need to cook. The bathroom has two Italian showers, 2 sinks and a toilet. There is a 2nd WC in the entrance.",
                "capacity": 2,
                "bedroom": 1,
                "beds": 1,
                "bathrooms": 1,
                "amenities": ["Wireless Internet", "Kitchen", "Dryer", "Security camera"],
                "host": {
                    "_id": 51641,
                    "fullname": "Malik",
                    "imgUrl": "https://source.unsplash.com/random/100x100/?face"
                },
                "acces": "All parts of the flat can be used.",
                "note": "We live in the accommodation when we are not renting it so there is business of ours don't be surprised :)",
                "transit": "RER Châtelet les halles (6mn) Metro Etienne Marcel Line 4 (4mn) Metro Reaumur Line 3 (3mn) The closest car park is located at 149 rue Saint Denis (indigo). Price: 39euros / 24H. You are located between 10 and 20 minutes walk from the most popular tourist attractions (Marais, Louvre, Beaubourg ...) and 5 minutes walk from 'Chatelet-les-Halles' the best served metro station in Paris. For those who love shopping, art, culture and the French art of living, our apartment is perfect.",
                "around": "It is located in the Montorgueil district in the heart of Paris. Rue Montorgueil and those that cross it form the largest pedestrian area in the capital. This mini golden triangle attracts all kinds of people. At noon, bankers and start-up geeks who work nearby come to eat there. During the day, tourists and regulars share the sidewalks in all courtesy. In the early evening, the terraces welcome active young people who come to relax and meet up over a drink. The apartment is very central and allows you to visit most of the Parisian attractions on foot: Louvre Museum (10mn), Le Marais (10mn). In the adjacent, semi-pedestrian streets, you will find trendy restaurants, bars and shops.",
                "loc": {
                    "country": "France",
                    "countryCode": "FR",
                    "address": "Paris, Île-de-France, France",
                    "lng": 2.345412038289177,
                    "lat": 48.862811614303716
                },
                "type": "loft",
                "reviews": [{
                    "id": "45",
                    "txt": "Wow this loft is the best!",
                    "rate": 5,
                    "date": "Apr 03 2021",
                    "by": {
                        "_id": "u1025",
                        "fullname": "Ferdinand",
                        "imgUrl": "https://source.unsplash.com/random/100x100/?face"
                    }
                }],
                "likedByUsers": ["Racha", "Roy", "Missy B."]
            },

            {
                "_id": "103165446",
                "name": "PARIS INSIDE HOME! 50m2",
                "imgUrls": [
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638297053/airdnd/e5acfcfb-6fa5-4607-866c-dec81168db5a_z2krlm.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638297054/airdnd/8d981a48-008c-46d8-a7a4-4c2ef59c24de_tspclj.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638297053/airdnd/5ba0fc40-f144-4ed5-8797-33604a3a585d_xm0au2.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638297053/airdnd/a63ad87f-5c12-4e31-887d-df0fe928fc52_eosdqy.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638297053/airdnd/dc40d182-f356-469a-aa8d-f38797b4c474_uk8jkw.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638297053/airdnd/83a0fecc-d851-4518-9b2d-b278dc6528ec_fpszz8.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638297053/airdnd/cd648cfd-49a9-4918-a629-3940f5de7846_i8uxvu.jpg"
                ],
                "sleep": ["https://res.cloudinary.com/di0utpbop/image/upload/v1638303080/airdnd/28f5c8ee-808d-4d77-b3b9-9b361652ef48_1_txhhwg.jpg"],
                "price": 535.00,
                "summary": "16th floor (with elevator) facing the Montparnasse tower. PARIS VIEW, EIFFEL TOWER VIEW. 1 separate bedroom, 50m2, modern and clean. Security, shops, restaurants, cinemas nearby.",
                "space": "16th floor, a breathtaking view of Paris! Autonomous arrival, no key exchanges.",
                "capacity": 4,
                "bedroom": 1,
                "beds": 3,
                "bathrooms": 1,
                "amenities": ["Elevator", "TV", "Wireless Internet", "Kitchen", "Security camera", "City skyline view"],
                "host": {
                    "_id": "5139841",
                    "fullname": "Berkley",
                    "imgUrl": "https://source.unsplash.com/random/100x100/?face"
                },
                "acces": "All parts of the flat can be used.",
                "note": "The entrance door of the apartment does not need to be opened with keys. This is a code that is changed regularly between each rental for more security.",
                "transit": "Metro lines at the bottom of the apartment: line 4; line 6; line 12 and line 13.",
                "around": "You're in middle of paris, GO!",
                "loc": {
                    "country": "France",
                    "countryCode": "FR",
                    "address": "Paris, Île-de-France, France",
                    "lng": 2.309501271442227,
                    "lat": 48.83918269196788
                },
                "type": "apartment",
                "reviews": [{
                    "id": "56",
                    "txt": "Best stay ever!",
                    "rate": 4,
                    "date": "Apr 03 2021",
                    "by": {
                        "_id": "u1029",
                        "fullname": "Yur",
                        "imgUrl": "https://source.unsplash.com/random/100x100/?face"
                    }
                }],
                "likedByUsers": ["Gigi", "Kimbape"]
            },

            {
                "_id": "104016546",
                "name": "Loft Leidsegracht - Private studio + Roof terrace!",
                "imgUrls": [
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638293951/airdnd/32ea0216-ce57-4051-a045-2af634bb3254_za56c8.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638293951/airdnd/9ed0d9de-7d26-4329-b23c-40531c1ce214_ygb5tt.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638293951/airdnd/07a21f7c-a9d2-40be-b552-e21e2f62e024_u63ate.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638293951/airdnd/c028142a-5212-4821-bd1c-ffc40f5e66af_nmrd94.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638293951/airdnd/8757fd7a-b80c-4b48-b035-5c40ca2f6f21_aqj1yh.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638293951/airdnd/1b9af1fe-f808-4a2f-95a6-7a7db319adb8_nrypk4.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638293952/airdnd/d3f7a71f-fd29-413b-bafe-3e53e1ea8a8e_pk2gjg.jpg"
                ],
                "sleep": ["https://res.cloudinary.com/di0utpbop/image/upload/v1638293951/airdnd/9ed0d9de-7d26-4329-b23c-40531c1ce214_ygb5tt.jpg"],
                "price": 136.00,
                "summary": "The lively Leidse square area has plenty of bars, restaurans and nightlife suitable for all ages and budgets. Close to the Loft is the famous Vondelpark and cultural attractions like the Rijksmuseum, Van Gogh Museum, and the Stedelijk Museum.",
                "space": "Loft Leidsegracht is located in a quiet side street just 100 meters from to the lively Leidse square. Leidse square is the very center of Amsterdam and has many fun bars, good restaurants, nightlife and Amsterdam's main cultural attractions are very nearby. The loft is very spacious and was fully renovated in June 2017. You will be one of the first users. The interior is very stylishly designed with a new bathroom, clean and comes with a large rain shower. Towels, toiletries, linens are present.",
                "capacity": 5,
                "bedroom": 1,
                "beds": 3,
                "bathrooms": 1,
                "amenities": ["TV", "Wireless Internet", "Kitchen", "Dryer", "Microwave", "Patio or balcony"],
                "host": {
                    "_id": "51399341",
                    "fullname": "eric Vökel",
                    "imgUrl": "https://source.unsplash.com/random/100x100/?face"
                },
                "acces": "the entire space is private! Use of outdoor space is limited to hours between 08.00 (am) and 22.00 (10 pm).",
                "note": "Stag or hen parties or similar parties are strictly forbidden.",
                "transit": "From the airport: Bus 197 departs every 10 minutes from the airport and takes you in half an hour to the Leidse Square. From there it's a 3 minutes walk to the house.",
                "around": "The location is perfect as it’s in the very heart of Amsterdam. The surroundings are full of cultural activities, some of the world's most famous museums within walking distance, the beautiful Vondelpark next door, and right in the middle of the canal district. Around the Leidse Square there is an enormous array of very diverse café’s, bars, restaurants and nightlife catering for all ages and everybody's budget. The Leidsestraat is the most visited shopping street of Amsterdam and offers lots of famous shops but also less known gems.",
                "loc": {
                    "country": "Netherlands",
                    "countryCode": "NL",
                    "address": "Amsterdam, North Holland, Netherlands",
                    "lng": 4.884217719683958,
                    "lat": 52.36629527416912
                },
                "type": "apartment",
                "reviews": [{
                    "id": "90",
                    "txt": "Very poor apartment handling",
                    "rate": 1,
                    "date": "Apr 22 2018",
                    "by": {
                        "_id": "u19",
                        "fullname": "Fin",
                        "imgUrl": "https://source.unsplash.com/random/100x100/?face"
                    }
                }],
                "likedByUsers": ["checko", "Pinko", "Libi", "Karen"]
            },

            {
                "_id": "100165746",
                "name": "Catch Apartment",
                "imgUrls": [
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638291773/airdnd/9ed552b9-2bd8-40aa-881c-5489b71af06d_cishwy.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638291771/airdnd/1829eab5-e3df-4f00-8f6d-104eea2e5682_pymshc.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638291772/airdnd/3af1079f-8391-44fd-8e74-36dad5640361_yl9d0y.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638291771/airdnd/e54cc70f-50e9-4c97-a120-7adeace3b8a6_mwzkeb.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638291771/airdnd/5fc665d0-2866-4b42-87ba-631e9c935999_qoalco.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638291771/airdnd/a87e9c54-bfa4-4671-b6db-567a551ce354_qbhu4p.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638291771/airdnd/1829eab5-e3df-4f00-8f6d-104eea2e5682_pymshc.jpg"
                ],
                "sleep": ["https://res.cloudinary.com/di0utpbop/image/upload/v1638288481/airdnd/208eb96e-897f-4a2d-953a-42e749fd4502_iq8mzs.jpg"],
                "price": 235.00,
                "summary": "Welcome to the Catch, our lovely Apartment located in the heart of Amsterdam. This apartment is fully equipped with all the necessary appliances and also a bathtub jacuzzi. The apartment also has two balconies. Restaurants, shops, touristic attractions are a walking distance away.",
                "space": "the Catch - a real Amsterdam Suite Located on a quiet street , and at the city center, you'll get to have the full Amsterdam experience!.",
                "capacity": 5,
                "bedroom": 1,
                "beds": 3,
                "bathrooms": 2,
                "amenities": ["Elevator", "TV", "Wireless Internet", "Kitchen", "Dryer", "Washer", "Patio or balcony"],
                "host": {
                    "_id": "513982",
                    "fullname": "Missy B.",
                    "imgUrl": "https://source.unsplash.com/random/100x100/?face"
                },
                "acces": "Check in from 3 PM Check out latest 12 Noon",
                "note": "Stag or hen parties or similar parties are strictly forbidden. A security deposit of EUR 250 will be authorized (not charged) for incidentals on a valid credit card upon check-in. This authorization will be cancelled upon check-out, subject to a damage inspection of the accommodation.",
                "transit": "Metro: Lines 50, 51, 53, 54 Bus: More than 20 lines pass through Central Station Tram: 11 de 14 lines pass through Centraal Station Train: Central Station",
                "around": "central Station: 2’ min walking distance. NEMO Science Centre: 1’ min walking distance. Red Light Distric: 9’ min walking distance.Canal Belt: 15’ min walking distance.",
                "loc": {
                    "country": "Netherlands",
                    "countryCode": "NL",
                    "address": "Amsterdam, North Holland, Netherlands",
                    "lng": 4.892340591853418,
                    "lat": 52.36629067647142
                },
                "type": "apartment",
                "reviews": [{
                    "id": "59",
                    "txt": "The bed was amazing! must come back soon for it!",
                    "rate": 5,
                    "date": "Apr 03 2016",
                    "by": {
                        "_id": "u10273",
                        "fullname": "Uko",
                        "imgUrl": "https://source.unsplash.com/random/100x100/?face"
                    }
                }],
                "likedByUsers": ["Fridrich", "Zommen", "Yarl", "Roy"]
            },

            {
                "_id": "1330006546",
                "name": "Central, Exclusive Penthouse with River View",
                "imgUrls": [
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638288481/airdnd/208eb96e-897f-4a2d-953a-42e749fd4502_iq8mzs.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638288480/airdnd/3d23b0b3-d0db-4213-b954-6be4e958daef_iyp4xf.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638288480/airdnd/1dc2556d-7bc7-4bea-9dae-c315b61d81d9_gcbq76.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638288480/airdnd/79d642e1-70c7-4a4b-bdc3-26ef9b7f0d04_mgq1nl.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638288480/airdnd/45554c11-205f-4f06-a851-635fa188e5ba_1_xloyfv.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638288480/airdnd/45554c11-205f-4f06-a851-635fa188e5ba_qloigt.jpg"
                ],
                "sleep": ["https://res.cloudinary.com/di0utpbop/image/upload/v1638288480/airdnd/79d642e1-70c7-4a4b-bdc3-26ef9b7f0d04_mgq1nl.jpg"],
                "price": 380.00,
                "summary": "A naturally well-lit 45m2 penthouse. It has a double bedroom, one bathroom, a living-dining room, a fully equipped kitchen and a balcony with an amazing view of the IJ river. Total sleeping capacity: 4 people (double sofa bed for 2 guests) For stays of 7 nights or more, there is weekly housekeeping. Additional cleaning services can be booked at an extra cost. Bed linen and towels included.",
                "space": "Eric Vökel Boutique Apartments - Amsterdam Suites Located on a quiet street next to the Central Railway Station, and only a few steps away from the city center, you'll find our new building containing 28 designer apartments and views of the IJ river and the city center. Just a few steps away from the city's canals, in a quarter of the city full of quaint shops, where you will also find a wide range of cuisines.",
                "capacity": 4,
                "bedroom": 1,
                "beds": 3,
                "bathrooms": 1,
                "amenities": ["Elevator", "TV", "Wireless Internet", "Kitchen", "Dryer", "Washer", "Patio or balcony"],
                "host": {
                    "_id": "51399381",
                    "fullname": "eric Vökel",
                    "imgUrl": "https://source.unsplash.com/random/100x100/?face"
                },
                "acces": "Check in from 3 PM, Check out latest 12 Noon",
                "note": "Stag or hen parties or similar parties are strictly forbidden. Please note that for reservations of 3 or more apartments in our building, special group conditions and extra charges may apply. Children up to 3 years stay for free in existing beds. Older children are considered as adults. A security deposit of EUR 250 will be authorized (not charged) for incidentals on a valid credit card upon check-in. This authorization will be cancelled upon check-out, subject to a damage inspection of the accommodation.",
                "transit": "Metro: Lines 50, 51, 53, 54. Bus: More than 20 lines pass through Centraal Station Tram: 11 de 14 lines pass through Centraal Station Train: Centraal Station",
                "around": "Centraal Station: 8’ min walking distance. Canal Belt: 15’ min walking distance.",
                "loc": {
                    "country": "Netherlands",
                    "countryCode": "NL",
                    "address": "Amsterdam, North Holland, Netherlands",
                    "lng": 4.90568244605868,
                    "lat": 52.376798756235814
                },
                "type": "apartment",
                "reviews": [{
                    "id": "97",
                    "txt": "Had fun. Thank you.",
                    "rate": 3,
                    "date": "Apr 03 2020",
                    "by": {
                        "_id": "u102342",
                        "fullname": "Chappi",
                        "imgUrl": "https://source.unsplash.com/random/100x100/?face"
                    }
                }],
                "likedByUsers": ["Yorgen", "Philip", "Kiril", "Nicole"]
            },

            {
                "_id": "1000654755",
                "name": "Cozy, furnished apartament near Lelylaan Station",
                "imgUrls": [
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638281929/airdnd/3f474f76-e7ee-482d-ada4-f02a8aeff609_zpai1w.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638281946/airdnd/dc7dee05-a278-4256-89eb-c7a6425a40df_zipddp.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638281947/airdnd/3bf939b1-4eb5-4f6f-9c4f-74b6d4d44798_leyf8j.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638281947/airdnd/703a2749-9467-4f2c-9451-e3b023328c6c_uucvqs.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638281947/airdnd/109d1e21-0d6c-4fd6-a26d-096393ef425c_pjw6lc.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638281946/airdnd/9fd45a2c-ff66-44ea-994b-cfe4ccdc3726_g7ubwh.jpg",
                    "https://res.cloudinary.com/di0utpbop/image/upload/v1638281946/airdnd/538678e9-7f87-46e6-8812-e378fb9601a1_gwtfex.jpg"
                ],
                "sleep": ["https://res.cloudinary.com/di0utpbop/image/upload/v1638281946/airdnd/9fd45a2c-ff66-44ea-994b-cfe4ccdc3726_g7ubwh.jpg"],
                "price": 180.00,
                "summary": "Nice and clean private apartment near the city center, 15 minutes by bike to Central station, Leidseplein  Several shops, bars, restaurants and transports five minutes from my place.  Balcony, bath, towels, shampoo, shower, wifi, music lounge,",
                "space": "I offer a cozy, private apartment in Amsterdam, access to the bathroom, kichen and wifi. Directly to the public transport. Vondelpark and Supermarket within a minute walking distance.",
                "capacity": 2,
                "bedroom": 1,
                "beds": 1,
                "bathrooms": 1,

                "amenities": ["Internet", "Wireless Internet", "Kitchen", "Heating", "Washer", "Essentials"],
                "host": {
                    "_id": "51399391",
                    "fullname": "Davit Pok",
                    "imgUrl": "https://source.unsplash.com/random/100x100/?face"
                },
                "loc": {
                    "country": "Netherlands",
                    "countryCode": "NL",
                    "address": "Amsterdam, North Holland, Netherlands",
                    "lng": 4.862859671199358,
                    "lat": 52.35992696894107
                },
                "type": "apartment",
                "bathrooms": 1,
                "bedrooms": 2,
                "acces": "Check in from 1 PM Check out 12 Noon",
                "notes": "don't forget to have FUN!",
                "transit": "Directly train connection to Central Station and  to the city center and tourist attractions.",
                "around": "red district,markets and everything Amsterdam has to offer",
                "reviews": [{
                    "id": "100",
                    "txt": "Wont come back,  for sure.",
                    "rate": 2,
                    "date": "Apr 03 2018",
                    "by": {
                        "_id": "u302",
                        "fullname": "Yoram",
                        "imgUrl": "https://source.unsplash.com/random/100x100/?face"
                    }
                }],
                "likedByUsers": ["Miriam", "Nicole", "Duglas"]
            }
        ]
        console.log(stays);

        // gStays = JSON.parse(stays)
        // console.log(gStays);
        storage.store(STAY_KEY, stays)
    }
    return stays;
}

function _createStay(name, imgUrls, price, summary, space, around, notes, transit, capacity, bathrooms, beds, amenities, loc, type, reviews, likedByUsers) {
    return {
        _id: utilService.makeId(),
        name,
        imgUrls,
        price,
        summary,
        space,
        around,
        notes,
        transit,
        capacity,
        bathrooms,
        beds,
        amenities,
        host: {
            _id: '',
            fullname: '',
            imgUrl: '',
        },
        loc,
        type,
        reviews,
        likedByUsers
    }


}



// _createStay('Nice room at Vondelpark', ["https://a0.muscache.com/im/pictures/3f474f76-e7ee-482d-ada4-f02a8aeff609.jpg?im_w=1200", "https://a0.muscache.com/im/pictures/109d1e21-0d6c-4fd6-a26d-096393ef425c.jpg?im_w=720", "https://a0.muscache.com/im/pictures/dc7dee05-a278-4256-89eb-c7a6425a40df.jpg?im_w=720", "https://a0.muscache.com/im/pictures/3bf939b1-4eb5-4f6f-9c4f-74b6d4d44798.jpg?im_w=720", "https://a0.muscache.com/im/pictures/538678e9-7f87-46e6-8812-e378fb9601a1.jpg?im_w=720"], "Nice and clean private bedroom near the city center, 15 minutes by bike to Central station, Leidseplein  Several shops, bars, restaurants and transports five minutes from my place.  Balcony, bath, towels, shampoo, shower, wifi, music lounge,", "I offer a cuzy, private room in a nice apartment in Amsterdam, access to the bathroom, kichen and wifi. Directly to the public transport. Vondelpark and Supermarket within a minute walking distance.", 5, ["Internet", "Wireless Internet", "Kitchen", "Heating", "Washer", "Essentials"], {
//     country: 'Netherlands',
//     countryCode: 'NL',
//     address: 'Amsterdam, North Holland, Netherlands',
//     lat: 4.862859671199358,
//     lng: 52.35992696894107
// }, 'apartment',2),
// _createStay('Nice room at Wondelpark', 
// ["https://a0.muscache.com/im/pictures/3f474f76-e7ee-482d-ada4-f02a8aeff609.jpg?im_w=1200","https://a0.muscache.com/im/pictures/109d1e21-0d6c-4fd6-a26d-096393ef425c.jpg?im_w=720","https://a0.muscache.com/im/pictures/dc7dee05-a278-4256-89eb-c7a6425a40df.jpg?im_w=720","https://a0.muscache.com/im/pictures/3bf939b1-4eb5-4f6f-9c4f-74b6d4d44798.jpg?im_w=720","https://a0.muscache.com/im/pictures/538678e9-7f87-46e6-8812-e378fb9601a1.jpg?im_w=720"], 
// "Nice and clean private bedroom near the city center, 15 minutes by bike to Central station, Leidseplein  Several shops, bars, restaurants and transports five minutes from my place.  Balcony, bath, towels, shampoo, shower, wifi, music lounge,","I offer a cuzy, private room in a nice apartment in Amsterdam, access to the bathroom, kichen and wifi. Directly to the public transport. Vondelpark and Supermarket within a minute walking distance.", 
// 5,
// ["Internet","Wireless Internet","Kitchen","Heating","Washer","Essentials"],
// {
//     country: 'Netherlands',
//     countryCode: 'NL',
//     address: 'Amsterdam, North Holland, Netherlands',
//     lat: 5.362859671199358,
//     lng: 52.35992696894107
// }, 'apartment',2),
// _createStay('Nice room at Pondelpark', ["https://a0.muscache.com/im/pictures/3f474f76-e7ee-482d-ada4-f02a8aeff609.jpg?im_w=1200","https://a0.muscache.com/im/pictures/109d1e21-0d6c-4fd6-a26d-096393ef425c.jpg?im_w=720","https://a0.muscache.com/im/pictures/dc7dee05-a278-4256-89eb-c7a6425a40df.jpg?im_w=720","https://a0.muscache.com/im/pictures/3bf939b1-4eb5-4f6f-9c4f-74b6d4d44798.jpg?im_w=720","https://a0.muscache.com/im/pictures/538678e9-7f87-46e6-8812-e378fb9601a1.jpg?im_w=720"], "Nice and clean private bedroom near the city center, 15 minutes by bike to Central station, Leidseplein  Several shops, bars, restaurants and transports five minutes from my place.  Balcony, bath, towels, shampoo, shower, wifi, music lounge,","I offer a cuzy, private room in a nice apartment in Amsterdam, access to the bathroom, kichen and wifi. Directly to the public transport. Vondelpark and Supermarket within a minute walking distance.", 5,["Internet","Wireless Internet","Kitchen","Heating","Washer","Essentials"],
// {
//     country: 'Netherlands',
//     countryCode: 'NL',
//     address: 'Amsterdam, North Holland, Netherlands',
//     lat: 4.92859671199358,
//     lng: 52.45992696894107
// }, 'apartment',3),
// _createStay('Nice room at Zondelpark', ["https://a0.muscache.com/im/pictures/3f474f76-e7ee-482d-ada4-f02a8aeff609.jpg?im_w=1200","https://a0.muscache.com/im/pictures/109d1e21-0d6c-4fd6-a26d-096393ef425c.jpg?im_w=720","https://a0.muscache.com/im/pictures/dc7dee05-a278-4256-89eb-c7a6425a40df.jpg?im_w=720","https://a0.muscache.com/im/pictures/3bf939b1-4eb5-4f6f-9c4f-74b6d4d44798.jpg?im_w=720","https://a0.muscache.com/im/pictures/538678e9-7f87-46e6-8812-e378fb9601a1.jpg?im_w=720"], "Nice and clean private bedroom near the city center, 15 minutes by bike to Central station, Leidseplein  Several shops, bars, restaurants and transports five minutes from my place.  Balcony, bath, towels, shampoo, shower, wifi, music lounge,","I offer a cuzy, private room in a nice apartment in Amsterdam, access to the bathroom, kichen and wifi. Directly to the public transport. Vondelpark and Supermarket within a minute walking distance.", 5,["Internet","Wireless Internet","Kitchen","Heating","Washer","Essentials"],
// {
//     country: 'Netherlands',
//     countryCode: 'NL',
//     address: 'Amsterdam, North Holland, Netherlands',
//     lat: 5.162859671199358,
//     lng: 52.25992696894107
// }, 'apartment',2)