import axios from 'axios'

const form = document.querySelector('form')!
const addressInput = document.getElementById('address')! as HTMLInputElement

const GOOGLE_API_KEY = 'AIzaSyCahq67G0g5tHVPVcnA0n57YYS635siX58'

type GoogleGeocodingResponse = {
	results: { geometry: { location: { lat: number; lng: number } } }[]
	status: 'OK' | 'ZERO_RESULTS'
}

const searchAddressHandler = (event: Event) => {
	event.preventDefault()
	const enteredAddress = addressInput.value
	console.log(encodeURI(enteredAddress))
	//send request
	// .get<responseType>
	axios
		.get<GoogleGeocodingResponse>(
			`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
				enteredAddress
			)}&key=${GOOGLE_API_KEY}`
		)
		.then((res) => {
			if (res.data.status !== 'OK') {
				// questo errore finisce nel catch
				throw new Error('Nessuna location trovata')
			}
			const coordinates = res.data.results[0].geometry.location
			const map = new google.maps.Map(document.getElementById('map')!, {
				center: coordinates,
				zoom: 16,
			})
			new google.maps.Marker({ position: coordinates, map: map })
		})
		.catch((err) => console.log(err.message))
}

form.addEventListener('submit', searchAddressHandler)
