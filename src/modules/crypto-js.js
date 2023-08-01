import CryptoJS from 'crypto-js';

// let vars = {};
// let encrypted = CryptoJS.AES.encrypt(
// 	JSON.stringify(vars),
// 	process.env.SERVICE_ENCRYPTION_KEY,
// ).toString();
// console.log(encrypted);

let bytes = CryptoJS.AES.decrypt(
	'U2FsdGVkX19EOgyER1yjGn4lmKD26c1E8WdgtopTHapxO3fqUAviQI8gF4jSUmPdU95YQcs1vdj9EniKDYYXThRGnC5/wAd+0/GrjTNYtZkrg/uqP0b85n1WQKnwuDlTDHAl3yE89yeUdNJCDVnQaPa9rXBdE39xDKiGjpD7TTvDMYQT/nBiOWMuFne1aVapXKRYrVQikhhk4huf0yd4QtISYygev7X5Mgbo4UBsRQfAKUuofiWkZQ+XlaKi65Rmik1rRF5BB9BjJ8P+naJMdein6PXQUPdAhWAjEzjzq1bzVXUPlR9HuB+ztgCWAqJKz2YyqYs64qrOIum1I10Nqp7ZzkH38+LAwzmC4YHPcvYdT/srzRnA8sfuGD1+ZtsC/FjcRZ6yL7G7043M3eZBrd+ddLXRTUnhTXnilkHjcBLj8ErK+VPBKwnF7JJYk+XC',
	process.env.SERVICE_ENCRYPTION_KEY,
);

let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

export default decryptedData;
