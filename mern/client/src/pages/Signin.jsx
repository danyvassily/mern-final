import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux' 
import {signInStart, signInSuccess, signInFailure} from '../redux/user/userSlice.js'




export default function Signin() {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const {loading, error: errorMessage} = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim()});
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(formData.email === '' || formData.password === '') {
      dispatch(signInFailure('Veuillez remplir tous les champs'));
      return;
    }
    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
   
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate('/');
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (

    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-5xl">
            <span className="px-2 py-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg text-white">
              SOCIAL
            </span>
            Link
          </Link>
          <p className="text-sm mt-5">
            Bienvenue sur Social Hub, mon projet. Vous pouvez vous connecter avec votre compte google.
          </p>
        </div>
        {/* right */}
        
        <div className="flex-1">
   
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
            <Label value="Votre email" />
            <TextInput
            type="text"
            placeholder="Vladimir@gmail.com"
            id="email" onChange={handleChange}
            />
            </div>
            <div>
            <Label value="Mot de passe" />
            <TextInput
            type="password"
            placeholder="Mot de passe"
            id="password" onChange={handleChange}
            />
            </div>
            <Button gradientDuoTone='purpleToPink' type="submit" disabled={loading}>
              {loading ? (
                <>
                <Spinner size='sm'/>
                <span className="pl-3">Chargement...</span>
                </>
              )
              : ('Se connecter')}
            </Button>
          </form>
          <div className="div flex gap-2 text-sm mt-5">
            <span>Vous avez déjà un compte ?</span>
            <Link to="/signin" className='text-blue-500'>
              Connectez-vous
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )
          
          }
         
    
            
        </div>
      </div>
    </div>
  );
}