import md5 from "blueimp-md5";

const sanitizeString = (str) =>
  new Promise((res) => {
    res(str.trim("").toLowerCase());
  });

const getMD5 = (input) =>
  new Promise((res) => {
    res(md5(input));
  });

const handleError = (e) => console.log(e);

export { sanitizeString, getMD5, handleError };
