

export const uploadFile = async ( file ) => {

    const cloudURL = 'https://api.cloudinary.com/v1_1/dfnkcacaz/upload'

    const formData = new FormData();
    formData.append('upload_preset', 'journall-app');
    formData.append('file', file);

    try {

        const response = await fetch( cloudURL, {
            method: 'POST',
            body: formData
        });

        if ( response.ok ){
            const cloudResp = await response.json();
            return cloudResp.secure_url; 
        }else{
            throw await response.json();
        }

    } catch (error) {
        console.log( error )
    }

}