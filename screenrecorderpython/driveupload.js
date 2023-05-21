const { google }=  require('googleapis');
const path = require('path')
const fs = require ('fs')

const CLIENT_ID='448191189095-2lnrchoefvpgsbvsvh3ass0u18iqle8i.apps.googleusercontent.com';
const CLIENT_SECRET = '448191189095-2lnrchoefvpgsbvsvh3ass0u18iqle8i.apps.googleusercontent.com';
const REDIRECT_URI='https://developers.google.com/oauthplayground';
const REFRESH_TOKEN='1//04rocQzImRQy0CgYIARAAGAQSNwF-L9IrDeoVeRX4sVN55auAKFC35QW5GIs-VIwlsW_teWYh16NK0WDaMdh32FVj6-AqdrhPwdE';

const oauth2client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

oauth2client.setCredentials({ refresh_token: REFRESH_TOKEN})

const drive = google.drive({
    version: 'v3',
    auth: oauth2client
})

const filePath= path.join(__dirname, '/Users/shikharsingh/Documents/screenrecorderpython')

async function uploadFile() {
    try {
        
        const response = await drive.files.create({
            requestBody: {
                name: 'screen.py',
                mimeType: 'video/mp4'
            },
            media: {
                mimeType: 'video/mp4',
                body: fs.createReadStream(filePath)
            }
        })
        console.log(response.data);
    } catch (error) {
        
    }

}

uploadFile();
