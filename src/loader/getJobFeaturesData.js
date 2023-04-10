import { getStorageData } from "../fackDB";

export const jobFeaturesData = async() =>{
    const fData = await fetch('/jobFetures.json');
    const featuresData = await fData.json();
    const savedJob = getStorageData()
    let jobArray = [];
    for (const id in savedJob){
        const foundJob = featuresData.find(feature => feature.id == id);
        if(foundJob){
            foundJob.quantity = savedJob[id]
            jobArray.push(foundJob)
        }
    }
    return {jobArray, featuresData};
}