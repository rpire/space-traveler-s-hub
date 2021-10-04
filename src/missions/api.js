import axios from 'axios';
// mission_id
// mission_name
// description

const url = 'https://api.spacexdata.com/v3/missions';

const missions = async () => {
  const data = await axios.get(url);
  const formattedBooks = [];
  Object.keys(data).forEach((key) => {
    if (key) {
      formattedBooks.push({
        ...data[key][0], mission_id: key, mission_name: key, description: key,
      });
    }
  });

  return formattedBooks;
};

export default missions;
