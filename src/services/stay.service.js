import { storageService } from './async-storage.service'
// import { storage } from './storage.service'
import { utilService } from './util.service'
// const axios = require('axios')
import { httpService } from './http.service'


const STAY_KEY = 'staysDB';
// const TOY_URL = 'http://localhost:3000/api/toy/'

export const stayService = {
    query,
    getById,
    remove,
    save,
    getEmptyToy

}

var gstays = _createStays()
    // _createToys()


async function query(filterBy) {
    return storageService.query(STAY_KEY)

    // return httpService.get(`stay`, filterBy)

}

async function getById(id) {
    return storageService.get(STAY_KEY, id)
        // try {
        //     const res = await axios.get(TOY_URL + id)
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
    // const res = await axios.delete(TOY_URL + id)
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
    //     if (toy._id) {
    //         const res = await axios.put(TOY_URL + `${toy._id}`, toy)
    //         return res.data
    //     } else {
    //         const res = await axios.post(TOY_URL, toy)
    //         return res.data
    //     }

    // } catch (err) {
    //     console.log(err);
    // }

    // if (toy._id) {
    //     const addedToy = await httpService.put(`toy/${toy._id}`, toy)
    //     return addedToy

    // } else {
    //     const addedToy = await httpService.post(`toy`, toy)
    //     return addedToy
    // }


}
async function getEmptyStay() {
    return {
        _id: '',
        name: '',
        imgUrls: ['', ''],
        price: 0,
        summary: '',
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
        reviews: [],
        likedByUsers: []

    }
}

function _createStays() {
    var stays = storage.load(STAY_KEY)
    if (!stays || !stays.length) {
        stays = [
            // _createToy('Ball', "ball.png", ['Baby', 'Outdoor'], ['Greate']),
            // _createToy('Taddy Bear', "Bear.png.jpg", ['Baby', 'Doll'], ['Amazing!']),
            // _createToy('Cubes', "Cubes.png", ['Baby', 'Art', 'Box game'], ['WOW!']),
            // _createToy('Doll', "doll.png", ['Baby', 'Doll'], ['Amazing!']),
            // _createToy('Drums', "Drums.png", ['Baby', 'Outdoor'], ['Amazing!']),
            // _createToy('Duck', "duck.png", ['Baby'], ['WOW!']),
            // _createToy('Airplane', "plan.jpg", ['Baby', 'Outdoor', 'On wheels'], ['Greate!']),
            // _createToy('Train', "train.jpg", ['Baby', 'Outdoor', 'On wheels'], ['WOW!']),
            // _createToy('Truck', "truck.png", ['Baby', 'Outdoor', 'On wheels'], ['Greate!']),


        ]
        storage.store(STAY_KEY, stays)
    }
    return stays;
}

function _createStay(name, imgUrls, summary, amenities) {
    return {
        _id: utilService.makeId(),
        name,
        imgUrls,
        price: utilService.getRandomInt(50, 200),
        summary,
        capacity: 0,
        amenities,
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
        reviews: [],
        likedByUsers: []
    }


}