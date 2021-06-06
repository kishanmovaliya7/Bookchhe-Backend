// const gplay = require('google-play-scraper');
// const repository = require("../app/apps/repository");
// const googlePlayScraperRepository = require("../app/googlePlayScraperRouter/repository");
// const updateData = require("../app/apps/repository");
//
// const promiseBuilder = {
//     updateAppPromise: (payload) => {
//         return new Promise((resolve, reject) => {
//             gplay.app(payload)
//                 .then(async (data) => {
//                     const isExist = await googlePlayScraperRepository.getApps({appId: data.appId});
//                     if (isExist && isExist.length) {
//                         const update = await googlePlayScraperRepository.updateApps(data.appId, data);
//                         if (update.ok) {
//                             const updateGrebAppsData = await updateData.updateGrebApp(data.appId, data);
//                             if (updateGrebAppsData.ok) {
//                                 return resolve({success: true});
//                             } else {
//                                 return resolve({success: false});
//                             }
//                         } else {
//                             return resolve({success: false});
//                         }
//                     } else {
//                         const appCategories = await googlePlayScraperRepository.createApp(data);
//                         if (appCategories._id) {
//                             return resolve({success: true});
//                         } else {
//                             return resolve({success: false});
//                         }
//                     }
//                 })
//                 .catch(error => {
//                     console.log(error);
//                     resolve({success: false});
//                 });
//         });
//     }
// };
//
// const cronFun = async () => {
//     try {
//         const appIds = await repository.getAppsIds();
//         if (Array.isArray(appIds) && appIds.length) {
//             const allPromises = [];
//             appIds.forEach((payload) => {
//                 allPromises.push(promiseBuilder.updateAppPromise({appId: payload.appId}));
//             });
//            await Promise.all(allPromises).then(values => {
//                 if (values.some(value => value.success)) {
//                     console.log("Successfully updated")
//                 } else {
//                     console.log("Something went wrong")
//                 }
//             });
//         }
//     } catch (err) {
//         console.log(err)
//     }
// };
//
// module.exports = {
//     cronFun,
// };