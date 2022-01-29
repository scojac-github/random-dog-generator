public class DogPictureCallout {
    @AuraEnabled
    public static String getDogPicture(){
            // New HTTP request
          Http http = new Http();
          HttpRequest req = new HttpRequest();
            // Get URL for request from Named Credential
          req.setEndpoint('callout:DogPictureApi');
            // Define GET as the method
          req.setMethod('GET');
            // Send HTTP request to API endpoint
          HttpResponse resp = http.send(req);
            // Return response body
          return resp.getBody();
     }
  }	