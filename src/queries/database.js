import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
const firebaseConfig = {
  type: 'service_account',
  projectId: 'coding-e8606',
  private_key_id: 'd5c152cd1adef39293873c503777000b4f3ac3cc',
  private_key:
    '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC5rbeV/G8mNfKT\nDcZZLBIgKw26+p27WZ22hP/iVyBx38Q1qKvQaZZ8Pn/RktLGJ7aHL8MNdY8l++NZ\nMnZ1P6u7jcSR3zXQZsU/wXFaCV4UR/LfqAKN1PSmufkWDvT655D0TFVC+SBGVg1i\nRD+6NCSqiACkwyaRrF9S0sdJBgv7DKMvL3qqXzjOlJPnBnTaS3U1nTTa1KvmoiB6\n1jXCh/qyQda4ktyxcfhzxw10HL/HX+7v8QxyhT6FeOjuSAI4OtLkpG/6gDB0Jr2j\niOq8lS1iAhLq0NQbr6nEFjYc6Fubz+ZKl+0J6GGCs7amBXw6a/ice+uxDdKMDYhg\nBDUZNbM9AgMBAAECggEAFDe2Jb6225JEN37oeg0ybA5EEHf5dMztP1J8CkkyXzPe\nSXl0O91DZYPopwk1qh3o4g9xTaXfUGN8/dlgzKOCL4ngPYHweiC2mZqWnRcoB01O\nRMwmewsVGJJnbN90DV3pirBFGGXH/eCg1HJZ/gxvcaIdb9NP/8ylFH+e83SVGWC3\nNW3C0TqufWtsfQitYhpx7CEy+oU0U4K45yp4LkS9+wTqneWKqBXFo8xtxmtYmNJC\nWrGO0lnOXyqxEaPeN1GK6CjZkqy9I4ybnLRo+WLHSUz7gpfA9LFKArPXrpbfy1bY\na4YrEBvGfw7i8Md4FdkXZXuOAq++KfsVXAw4JFiQgQKBgQDvHgyYRNxLEE4X2r4X\nyQylkxBqO2aac8zITySer9epu4uAJiZakk0gTYIhlpxx2IC2KLNviASQBa/BzL7o\nAf9qbT4JIG2R0k+jKTPOs6uqOYuJrwcEiCwsU+5FD7+XeJQrU7Y8QozdunATaSJd\nkaGDDEX9my19cQ/p5Ae/7V+knwKBgQDGych40YLwUpVXAlbp4eWysxVu8BGybWoj\nAj7Qu41v98GdpVwhM8rPMj+y8B2c/o3jXOl4ClYuLWFAhKitU4OmrvE+1UEenzHS\n+Akjk2V4ZJQ2BSRfxoSvO20FoLoLO60+5bZnqB3cXLwao9UGpeDxmLbz43IYfM+5\nNMEvsrLeowKBgQCEwtdVV65EEwp43h97D0pxR8TuZoqiKLdDZAW+AX2pJJLglM3o\nraAa1k3xHjFAWGemO9TckNWPrUiXPnmkUS+hxIOUB6guNWm3+nFkS4d9XLPnvwET\neBOmjPcW6xaCIBWMNM9Sh9S0awY9ELte3jOhkhfuJdFM+5BNWSkgW8glmwKBgGNf\n2CHdyrFM928Jsl01GljdAaf1x0MFQ3vA0ZoTSD9jAZ1HXukSNR6jJgjT1Fn5PwEc\nH3Js6GwpL2bLam9LQpL+/YbFoMooFwY6DIeGVcF7tkPTCj3+xbG76WJY2OhoqtC4\nkRj8iADzMu22XPX30p20FDGT0CPBsS4K21B26sg1AoGAKKqIucRe2UbfLqtIw0+f\noGwk5umiaNHPs1e7DQA82+XkQmu8LnfDabYtDIC7Av4vKskKS/Sck+0+94runXtf\nAqZ7UBfa1AaFC6YeDKQ5fUgS4XVUn3Hf2KXf5TAZAn31N9B3W28C+nld5tSmJczB\nT1nH8xlBzbi3Cr9eZAdepC0=\n-----END PRIVATE KEY-----\n',
  client_email: 'firebase-adminsdk-7p5mp@coding-e8606.iam.gserviceaccount.com',
  client_id: '108868825275752145703',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url:
    'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-7p5mp%40coding-e8606.iam.gserviceaccount.com',
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
