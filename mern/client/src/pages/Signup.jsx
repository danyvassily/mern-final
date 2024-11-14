import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim()});
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if(formData.username === '' || formData.email === '' || formData.password === '') {
      setErrorMessage('Veuillez remplir tous les champs');
      setLoading(false);
      return;
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
   
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate('/signin');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
    setLoading(false);
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
            Bienvenue sur Social Hub, mon projet. Vous pouvez créer un compte ou vous connecter avec votre compte google.
          </p>
        </div>
        {/* right */}
        
        <div className="flex-1">
   
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
            <Label value="Nom d'utilisateur" />
            <TextInput
            type="text"
            placeholder="Votre nom d'utilisateur"
            id="username" onChange={handleChange}
            />
            </div>
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
              : ('S\'inscrire')}
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
