'use server'

export async function serverAction(formData:FormData) {
    console.log(formData.get('userName'))
    return {
        username:formData.get('userName')
    }

}