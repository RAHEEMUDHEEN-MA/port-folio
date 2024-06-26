import axios from 'axios';

const getUsers = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
  } catch (error) {
    if(error){
      console.log(error);
    }
    throw error;
  }
};

export default getUsers;