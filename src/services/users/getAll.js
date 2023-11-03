import API_URL from '../../constants/Api'

export default function getAllUsers(){
    return fetch(API_URL.USER_GET).then((response)=> response.json())
}