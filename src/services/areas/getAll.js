import API_URL from '../../constants/Api'

export default function getAllAreas(){
    return fetch(API_URL.AREA_GET).then((response)=> response.json())
}