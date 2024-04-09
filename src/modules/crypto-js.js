import CryptoJS from 'crypto-js';

// let vars = {};
// let encrypted = CryptoJS.AES.encrypt(
// 	JSON.stringify(vars),
// 	process.env.SERVICE_ENCRYPTION_KEY,
// ).toString();
// console.log(encrypted);

const encrypted =
	'U2FsdGVkX19MRXTwqUvOdaPoVw4+QkUcLwGWWfb1NyoxrwGAVvlom2dYXOcvHczafrzqX7R5cg1yKYOUcQ0FC0bsyOoKs7fpJBDx658nUCfRvoZl/gND+N0bA8L3Wqa3DXyvRldaawRCRtgr/vHQ4K62cuW8Bhv9Tbh6IOVD0RNpsj/8A7MAr0kYG/AZjpi3cs7v606UTeHIcbczLqxzpRG6iyG4S7Eyun6THlXmQ/BsRdqyvQXqBKVHIAHdknMjr2nETYJbTQnTWY8HTwDAK6iuqu5Dp1YFmGEhxyo/Naq2Nm81qwwLUMEBYI5gM+lbNw340OcA30GPotucVZVebOSBOahmEpo216yf0WTyv4wLuYSlgCvC4g/kWmA9YiJ+BlvwOqOFXIGeisal3Q+gDzQMAdsmSnko9bkYSiiRgoKK/95XT/Bbvvi7f9oDctlsc6LEJHb+Koxy/HGLQ+q6kyaGa6+sWzwtKA07LuT+W9R4kOpeXOvTwKiGjIxJWHDwGz8Q5zPLzCMz157nLox8jhquaCswoF5Z5T9ITSXB2K3yFOjFGHN4SvNOv6CG40CSOnMwyMMHChathKpXSdOBby7+XmWMo97eyu7zLpfVa9x3QT134a/WB/HP7SRJCUCr66aGit3VA3A5pbKJg1G+gIdKDh4EWZiFNPW5/6ANAfwBzsEkF+Hd4aIVWgc2dZgvmnSG4nGqnRfIC5pn4IgjRTsbxmqiWi7mpVtge7/e80pK/4lzDyXeCgBnyVY60oVC5IeeF/OoDyza0NvCEU+RdUMBzuyEeeh1zh1xfHkPVKQ=';

let bytes = CryptoJS.AES.decrypt(encrypted, process.env.SERVICE_ENCRYPTION_KEY);
let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
// console.log(decryptedData);

export default decryptedData;
