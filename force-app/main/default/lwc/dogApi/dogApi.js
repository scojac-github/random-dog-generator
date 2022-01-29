import { LightningElement } from 'lwc';
// Import Apex Method
import getDogPicture from '@salesforce/apex/DogPictureCallout.getDogPicture';
export default class DogApi extends LightningElement {
    // Set variables
    imageReady = false; // Identifies if image is loaded
    loadingSpinner = false; // Indicates image is not yet ready
    pictureUrl;
    // Define method to invoke
    handleClick(){
        this.loadingSpinner = true;
        this.imageReady = false;
        // Execute API call
        getDogPicture({}).then(resp => {
            // API response body
            this.pictureUrl = JSON.parse(resp).message; // Stores picture URL
            this.imageReady = true;
            this.loadingSpinner = false;
        })
    }
}