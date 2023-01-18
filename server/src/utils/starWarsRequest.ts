import axios from "axios";

const urlWithTypes = (type: string) => {
  return `https://swapi.dev/api/${type}/`;
}

export const getWithTypes = async (type: string, name: string = '') => {
  const data: any[] = [];
  let next = urlWithTypes(type);

  while (next !== null) {
    const response = await axios.get(next);

    for (const item of response.data.results) {
      if (
        name == '' ||
        (item.name && item.name.toLowerCase().includes(name.toLowerCase())) ||
        (item.title && item.title.toLowerCase().includes(name.toLowerCase()))
      ) {
        data.push({
          type,
          data: item,
        });
      }
    }

    next = response.data.next;
  }

  return data;
}

export const getWithId = async (type: string, id: string) => {
  const response = await axios.get(urlWithTypes(type) + id);
  return response.data;
}