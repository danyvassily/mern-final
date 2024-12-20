import { TextInput, Button } from 'flowbite-react'
import {useSelector} from 'react-redux'
import { useState, useRef, useEffect } from 'react'




export default function DashProfile() {
  const {currentUser} = useSelector(state => state.user)
  const [imageFile, setImageFile] = useState(null)
  const [imageFileUrl, setImageFileUrl] = useState(null)
  const filePickerRef = useRef(null)
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if(file){
      setImageFile(file);
      setImageFileUrl(URL.createObjectURL(file));
    }
  }
  useEffect(() => {
    if (imageFile) {
      uploadImageImage();
    }
  }, [imageFile])
  const uploadImageImage = async () => {
    console.log('uploading image...');
  };
  return (
    <div className='max-w-lg mx-auto p-3 w-full' >
      <h1 className='text-2xl font-bold text-center my-4' >Profile</h1>
      <form className='flex flex-col gap-4' >
        <input type='file' accept='image/*' onChange={handleImageChange} ref={filePickerRef} className='hidden' />
        <div className="w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full" onClick={() => filePickerRef.current.click()} >

          <img src={ imageFileUrl || currentUser.profilePicture} alt="user" className="rounded-full w-full h-full border-8 border-[lightgray]" />
          <span>{currentUser.name}</span>
        </div>
        <TextInput type='text' id='username' placeholder='username' defaultValue={currentUser.username} />
        <TextInput type='email' id='email' placeholder='email' defaultValue={currentUser.email} />
        <TextInput type='password' id='password' placeholder='password' defaultValue="password" />
        <Button type='submit' gradientDuoTone='purpleToPink' className='mt-4' >Update</Button>
      </form>
      <div className='text-red-500 text-sm flex flex-col gap-4' >
        <span className='cursor-pointer'>
        Supression du compte
        </span>
        <span className='cursor-pointer' >
         Se deconnecter
        </span>
      </div>

    </div>
  )
}
