import React from "react";

function UserPassForm() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <form className="flex flex-col gap-4 w-full">
      <input
        className="border-2 border-gray-300 rounded-full w-full p-4 pl-8"
        id="username"
        type="text"
        placeholder="Nom d'utilisateur"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="border-2 border-gray-300 rounded-full w-full p-4 pl-8"
        id="password"
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="submit"
        className="bg-black font-bold p-4 rounded-full text-white"
      >
        Connexion
      </button>
    </form>
  );
}

function SocialLogin(props: { logo: string; text: string; class: string }) {
  return (
    <div className="flex flex-col w-full">
      <button
        type="submit"
        className={
          "flex items-center justify-center w-full flex-row font-bold p-4 rounded-full " +
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
  return <img src="/src/assets/logo.png" className="w-full"></img>;
}

function Divider(props: { text: string }) {
  return (
    <div className="flex flex-row w-full items-center">
      <div className="w-full border-b border-gray-300"></div>
      <div className="mx-4 text-gray-500">{props.text}</div>
      <div className="w-full border-b border-gray-300"></div>
    </div>
  );
}

export default function () {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 gap-12 max-w-lg m-auto">
      <div>
        <Logo />
      </div>
      <div className="w-full flex flex-col gap-4">
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
      </div>
      <Divider text="ou" />
      <UserPassForm />
    </div>
  );
}
