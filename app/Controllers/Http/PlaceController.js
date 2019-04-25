'use strict'

const Place = use('App/Models/Place');

class PlaceController {
    async index({ response }) {
        try {
            let places = await Place.all()
            return response.json(places)
        } catch (e) {
            console.log(e);
            return response.status(404).send({ 'message': 'Not found' })
        }
    }

    async store({ request, response }) {
        try {
            const data = request.only(['image', 'name', 'address', 'latitude', 'longitude', 'rating'])
            let place = await Place.create(data)
            return response.status(200).json(place)
        } catch (e) {
            console.log(e);
            return response.status(400).send({ 'message': 'Something went wrong!' })
        }
    }

    async show({ params, response }) {
        try {
            const { id } = params
            const place = await Place.find(id)
            return response.status(200).json({ 'place': place })
        } catch (e) {
            console.log(e);
            return response.status(400).send({ 'message': 'Something went wrong!' })
        }
    }
}

module.exports = PlaceController
