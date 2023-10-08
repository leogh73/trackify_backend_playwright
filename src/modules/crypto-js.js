import CryptoJS from 'crypto-js';

// let vars = {};
// let encrypted = CryptoJS.AES.encrypt(
// 	JSON.stringify(vars),
// 	process.env.SERVICE_ENCRYPTION_KEY,
// ).toString();
// console.log(encrypted);

const encrypted =
	'U2FsdGVkX19eo/1/g7XaQVkLjXXL0X0L6rWFHd0TwhTPppdXbMCvyg3YNsONgR+3SyskojaeWTW7zoojq1XQl988wFGCcoLGB1i8y9Gt/6FtpJYS6vdIPSnDlUskUYiTKoHrqMRtxEcvggh9jNqQAcmcfGx5qF2wBsTBi2FgYMB/5zAqqZef/dr2PeYZWflBVQNpVAUkkYMO1xoGde4xs+RNgAwn2FregrJhJBW3M99Z9UXleBp1DVFamg+JwitBKHCL/2A5KhGknWQe5ph9JkW/7yif5zUA6zEPNRFl05zMuhSr9wuPrPVXCNqUGf4Hkt3hwPEN/jm+d+T+c3fZn3WQ04Jmk5trCtH+7nVdn7XbAUB0oV1dtJmkJzgHCHvzCEbxMLVo9msd7B6YR8g5pkrkI+zPmO7gkroEXy+B1jTdXfmXAo6m8HknM4DrMwPnYQIz/NFA12a28UGnRdP+XZheztN48LNMg+sJf1AoeMQfMR2sd6Pu2rsZaeB+CXKya19STSg3nDMJp42WDkx4+Ao4D/E8sHSucIAWla1HEpof59mWT7JohO0Owip+jGZxEYChCIGJG4qKk2F56iAAOSCsD2gdDvaDBGXYEwckGBZUQg7BwDc64AEEAEnnJzVupymX6z6qKIwPPMHQt5LBoU1jY8B0O7rPFVP20+EgzFLypY1SwrYCpk4+faSia2Ve8BLEjF4Z4xYT91pUCUHHMIaCDZs+n363o52/seSUW+IslFeXqSp/o0Nia7LqvbJBTdt2DaqCqokCw4WwRmIsOjBizXAOXeJf/6GRzF85l8noNcisVjdkrkAfxMq6gDlpuoDxT9ocqokz6wztMhy6GqY5eyDhrod23rVHXGs/Nj4=';

let bytes = CryptoJS.AES.decrypt(encrypted, process.env.SERVICE_ENCRYPTION_KEY);
let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
// console.log(decryptedData);

export default decryptedData;
