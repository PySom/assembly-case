import { handleError } from "../error_handler/error_handler";
import axios from "axios";
import ls from "../local/local";
import { baseUrl } from './url';

const verifyItem = (item) => {
  if (Array.isArray(item)) {
    return item.length;
  }
  return item;
};

const checkItemInLs = (name) => {
  //get intended item from local storage
  const item = ls.getItemInLs(name);
  return new Promise((resolve, reject) => {
    item && verifyItem(item.item) ? resolve(item.item) : reject(item.item);
  });
};

const get = (url, modelName, name) => {
  const item = checkItemInLs(name);
  //check if we have that item, if we do return it, otherwise, make an api call
  return item
    .then((data) => {
      return data;
    })
    .catch((e) => {
      return axios
        .get(baseUrl + url)
        .then((response) => {
          if (name) ls.persistItemInLS(name, response.data, 1);
          return response.data;
        })
          .catch((err) => {
              const message = handleError(err, modelName)
              throw new Error(message);
        });
    });
};



const api = {
  get
};

export default api;