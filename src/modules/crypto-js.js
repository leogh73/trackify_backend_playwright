import CryptoJS from 'crypto-js';

// let vars = {};
// let encrypted = CryptoJS.AES.encrypt(
// 	JSON.stringify(vars),
// 	process.env.SERVICE_ENCRYPTION_KEY,
// ).toString();
// console.log(encrypted);

const encrypted =
	'U2FsdGVkX19lo2ttrHvjqX1AStjt/S0/1oDo9x2dDLcxd9WOkPtKJFgWXLaPSjtM9I9VwJ7NL+ezYxuMBw66+f0SjsADR0EkYwoZXWKEH7k/2RhZIdCNV4X4n1gUWe0vsg2wYhpZutPCeu4ejIzTjEpEQ3fphxdZFIA9qZfHBSqAKuQnl19I0LXS/0TwfbfojrN21j3O8QE0Kf2JLl/T7x5DLM/BdchPZEogk29UD53F4EZwkHcBGgT0tcTrJz/Ec8p080M+CkqnwtHjW2Z/uTlJToHGsbo5fd9meWIPqXzDAoAcuCXbzYF7hQOn5+QoaIcMzARXjfMne7OS27uyymDKvhujfbRYq5jRzxkhR3FHyztvVaRqHUwvBATFwbvF9Mi85S7v7SnZw4DaUSpQTEF+19BtslNvZjFKmWCQDpw0TuQx1vJ4z1kS467aULWw2k9xB/905lNikcMk1zSenP53A16e/nsDH+PYnoLOCV706p6qSTTychNRxmaSboMj+l3HY1xTQG2870J6X/vd+VADCs7zpnzMqb0560MqC5bmeKJExly/AYmW8eolvmaEgP6YNsdqQyGTZpXdIxTX7eFj7oRxJcQQsS6VU1jjUTw=';

let bytes = CryptoJS.AES.decrypt(encrypted, process.env.SERVICE_ENCRYPTION_KEY);
let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
// console.log(decryptedData);

export default decryptedData;
