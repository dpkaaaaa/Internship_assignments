import { showMessage } from "./b.js";

let myPromise = new Promise(function (resolve, reject) {
    let isSuccess = true;
    if (isSuccess) {
        resolve("Promise Resolved: Task completed successfully.");
    } else {
        reject("Promise Rejected: An error occurred.");
    }
});

myPromise
    .then(function (result) {
        showMessage(result);
    })
    .catch(function (error) {
        showMessage(error);
    });
