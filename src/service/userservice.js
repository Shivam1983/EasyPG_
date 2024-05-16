import axios from 'axios'
const url="http://localhost:8080/ok/";
class userservice{
    getUsers(){
        axios.get(url);
    }
}
export default new userservice();