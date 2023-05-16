import CryptoJS from 'crypto-js';

// let vars = {};
// let encrypted = CryptoJS.AES.encrypt(
// 	JSON.stringify(vars),
// 	process.env.SERVICE_ENCRYPTION_KEY,
// ).toString();
// console.log(encrypted);

let bytes = CryptoJS.AES.decrypt(
	'U2FsdGVkX18oEib/PFo9J257Ji9Mt4ARWteC2RT4forftvyuCmgNFmtVETnLk5DWo+GpUCStDlrCoGdUKUp9C74TSWjZas49W3KdV45Pqd09CNXymIio/5ZhoStaRjLJhERrlFYy+uZp6yVTtgfD/Bvi1OLsdbpfoyVxovlDjZ0OIq1iD8igydKcDeKTEgDjw1IUv8JWdNPwdZKKv5RLZ2bIVJdMJHE1LlK4/+jsriMxcIICn0jvzfN06YM1uKFv8FjG6zOdiLLTOl1thgQwXUY8yNbdjdqzKNW49dQWIDHZ6TX1yyTmj5u37p2Vtiffnk1j+CZhhluQ9lizw8JA/XuGC8ZryNq+/VNAEKfutjk=',
	process.env.SERVICE_ENCRYPTION_KEY,
);
let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

export default decryptedData;
