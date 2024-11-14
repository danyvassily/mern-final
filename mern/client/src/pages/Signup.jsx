import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-5xl">
            <span className="px-2 py-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg text-white">
              SOCIAL
            </span>
            Hub
          </Link>
          <p className="text-sm mt-5">
            Bienvenue sur Social Hub, mon projet. Vous pouvez créer un compte ou vous connecter avec votre compte google.
          </p>
        </div>
        {/* right */}
        
        <div className="flex-1">
   
            <form className="flex flex-col gap-4">
            <div>
            <Label value="Nom d'utilisateur" />
            <TextInput
            type="text"
            placeholder="Nom d'utilisateur"
            id="username"
            required
            />
            </div>
            <div>
            <Label value="votre email" />
            <TextInput
            type="text"
            placeholder="votre email"
            id="email"
            required
            />
            </div>
            <div>
            <Label value="Mot de passe" />
            <TextInput
            type="password"
            placeholder="Mot de passe"
            id="password"
            required
            />
            </div>
            <Button gradientDuoTone='purpleToPink' type="submit">
              Sing up
            </Button>
          </form>
          <div className="div flex gap-2 text-sm mt-5">
            <span>Vous avez déjà un compte ?</span>
            <Link to="/signin" className='text-blue-500'>
              Connectez-vous
            </Link>
          </div>
         
    
            
        </div>
      </div>
    </div>
  );
}
