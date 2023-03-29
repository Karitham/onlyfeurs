import React from "react";

function UserPassForm() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <form className="flex flex-col w-full px-8 max-w-3xl">
      <input
        className="border-2 border-gray-300 rounded-full w-full mb-8 p-4 pl-8"
        id="username"
        type="text"
        placeholder="Nom d'utilisateur"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="border-2 border-gray-300 rounded-full w-full mb-8 p-4 pl-8"
        id="password"
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="submit"
        className="bg-black font-bold p-6 rounded-full text-white"
      >
        Connexion
      </button>
    </form>
  );
}

function SocialLogin(props: { logo: string; text: string; class: string }) {
  return (
    <div className="flex flex-col w-full px-8 mb-8 max-w-3xl">
      <button
        type="submit"
        className={
          "flex items-center justify-center w-full flex-row font-bold p-6 rounded-full " +
          props.class
        }
      >
        {props.logo}
        {props.text}{" "}
      </button>
    </div>
  );
}

function Logo() {
  return <img src="/src/assets/logo.png" className="p-8 w-max max-w-3xl"></img>;
}

function Divider(props: { text: string }) {
  return (
    <div className="flex flex-row w-full px-8 mb-8 max-w-3xl items-center">
      <div className="w-full border-b border-gray-300"></div>
      <div className="mx-4 text-gray-500">{props.text}</div>
      <div className="w-full border-b border-gray-300"></div>
    </div>
  );
}

export default function () {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Logo />
      <SocialLogin
        text="Connexion avec Google"
        logo=""
        class="bg-blue-700 text-white"
      />
      <SocialLogin
        text="Connexion avec Twitter"
        logo=""
        class="bg-blue-400 text-white"
      />
      <Divider text="ou" />
      <UserPassForm />
    </div>
  );
}
