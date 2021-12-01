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

_createStays()


async function query(filterBy) {
    return storageService.query(STAY_KEY)

    // return httpService.get(`stay`, filterBy)

}

async function getById(id) {
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
async function getEmptyStay() {
    return {
        _id: '',
        name: '',
        imgUrls: ['', ''],
        price: 0,
        summary: '',
        space: '',
        capacity: 0,
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
            lat: 0,
            lng: 0
        },
        type: '',
        reviews: ['peepi'],
        likedByUsers: ['weewi']

    }
}

function _createStays() {
    var stays = storage.load(STAY_KEY)
    if (!stays || !stays.length) {
        stays = [
            _createStay('Nice room at Vondelpark', ["https://a0.muscache.com/im/pictures/3f474f76-e7ee-482d-ada4-f02a8aeff609.jpg?im_w=1200", "https://a0.muscache.com/im/pictures/109d1e21-0d6c-4fd6-a26d-096393ef425c.jpg?im_w=720", "https://a0.muscache.com/im/pictures/dc7dee05-a278-4256-89eb-c7a6425a40df.jpg?im_w=720", "https://a0.muscache.com/im/pictures/3bf939b1-4eb5-4f6f-9c4f-74b6d4d44798.jpg?im_w=720", "https://a0.muscache.com/im/pictures/538678e9-7f87-46e6-8812-e378fb9601a1.jpg?im_w=720"], "Nice and clean private bedroom near the city center, 15 minutes by bike to Central station, Leidseplein  Several shops, bars, restaurants and transports five minutes from my place.  Balcony, bath, towels, shampoo, shower, wifi, music lounge,", "I offer a cuzy, private room in a nice apartment in Amsterdam, access to the bathroom, kichen and wifi. Directly to the public transport. Vondelpark and Supermarket within a minute walking distance.", 5, ["Internet", "Wireless Internet", "Kitchen", "Heating", "Washer", "Essentials"], {
                country: 'Netherlands',
                countryCode: 'NL',
                address: 'Amsterdam, North Holland, Netherlands',
                lat: 4.862859671199358,
                lng: 52.35992696894107
            }, 'apartment',2),
            _createStay('Nice room at Wondelpark', 
            ["https://a0.muscache.com/im/pictures/3f474f76-e7ee-482d-ada4-f02a8aeff609.jpg?im_w=1200","https://a0.muscache.com/im/pictures/109d1e21-0d6c-4fd6-a26d-096393ef425c.jpg?im_w=720","https://a0.muscache.com/im/pictures/dc7dee05-a278-4256-89eb-c7a6425a40df.jpg?im_w=720","https://a0.muscache.com/im/pictures/3bf939b1-4eb5-4f6f-9c4f-74b6d4d44798.jpg?im_w=720","https://a0.muscache.com/im/pictures/538678e9-7f87-46e6-8812-e378fb9601a1.jpg?im_w=720"], 
            "Nice and clean private bedroom near the city center, 15 minutes by bike to Central station, Leidseplein  Several shops, bars, restaurants and transports five minutes from my place.  Balcony, bath, towels, shampoo, shower, wifi, music lounge,","I offer a cuzy, private room in a nice apartment in Amsterdam, access to the bathroom, kichen and wifi. Directly to the public transport. Vondelpark and Supermarket within a minute walking distance.", 
            5,
            ["Internet","Wireless Internet","Kitchen","Heating","Washer","Essentials"],
            {
                country: 'Netherlands',
                countryCode: 'NL',
                address: 'Amsterdam, North Holland, Netherlands',
                lat: 5.362859671199358,
                lng: 52.35992696894107
            }, 'apartment',2),
            _createStay('Nice room at Pondelpark', ["https://a0.muscache.com/im/pictures/3f474f76-e7ee-482d-ada4-f02a8aeff609.jpg?im_w=1200","https://a0.muscache.com/im/pictures/109d1e21-0d6c-4fd6-a26d-096393ef425c.jpg?im_w=720","https://a0.muscache.com/im/pictures/dc7dee05-a278-4256-89eb-c7a6425a40df.jpg?im_w=720","https://a0.muscache.com/im/pictures/3bf939b1-4eb5-4f6f-9c4f-74b6d4d44798.jpg?im_w=720","https://a0.muscache.com/im/pictures/538678e9-7f87-46e6-8812-e378fb9601a1.jpg?im_w=720"], "Nice and clean private bedroom near the city center, 15 minutes by bike to Central station, Leidseplein  Several shops, bars, restaurants and transports five minutes from my place.  Balcony, bath, towels, shampoo, shower, wifi, music lounge,","I offer a cuzy, private room in a nice apartment in Amsterdam, access to the bathroom, kichen and wifi. Directly to the public transport. Vondelpark and Supermarket within a minute walking distance.", 5,["Internet","Wireless Internet","Kitchen","Heating","Washer","Essentials"],
            {
                country: 'Netherlands',
                countryCode: 'NL',
                address: 'Amsterdam, North Holland, Netherlands',
                lat: 4.92859671199358,
                lng: 52.45992696894107
            }, 'apartment',3),
            _createStay('Nice room at Zondelpark', ["https://a0.muscache.com/im/pictures/3f474f76-e7ee-482d-ada4-f02a8aeff609.jpg?im_w=1200","https://a0.muscache.com/im/pictures/109d1e21-0d6c-4fd6-a26d-096393ef425c.jpg?im_w=720","https://a0.muscache.com/im/pictures/dc7dee05-a278-4256-89eb-c7a6425a40df.jpg?im_w=720","https://a0.muscache.com/im/pictures/3bf939b1-4eb5-4f6f-9c4f-74b6d4d44798.jpg?im_w=720","https://a0.muscache.com/im/pictures/538678e9-7f87-46e6-8812-e378fb9601a1.jpg?im_w=720"], "Nice and clean private bedroom near the city center, 15 minutes by bike to Central station, Leidseplein  Several shops, bars, restaurants and transports five minutes from my place.  Balcony, bath, towels, shampoo, shower, wifi, music lounge,","I offer a cuzy, private room in a nice apartment in Amsterdam, access to the bathroom, kichen and wifi. Directly to the public transport. Vondelpark and Supermarket within a minute walking distance.", 5,["Internet","Wireless Internet","Kitchen","Heating","Washer","Essentials"],
            {
                country: 'Netherlands',
                countryCode: 'NL',
                address: 'Amsterdam, North Holland, Netherlands',
                lat: 5.162859671199358,
                lng: 52.25992696894107
            }, 'apartment',2),
            
        ]
        storage.store(STAY_KEY, stays)
    }
    return stays;
}

function _createStay(name, imgUrls, summary,space,capacity, amenities,loc,type,bathrooms) {
    return {
        _id: utilService.makeId(),
        name,
        imgUrls,
        price: utilService.getRandomInt(50, 200),
        summary,
        space,
        capacity,
        amenities,
        host: {
            _id: '',
            fullname: '',
            imgUrl: '',
        },
        loc,
        type,
        bathrooms,
        reviews: [],
        likedByUsers: []
    }


}