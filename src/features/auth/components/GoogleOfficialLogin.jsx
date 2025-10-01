import React, { useEffect, useRef, useCallback } from "react";
import { GOOGLE_CLIENT_ID } from "../../../config/googleAuth";

const GoogleOfficialLogin = ({ onSuccess, onError }) => {
  const googleButtonRef = useRef(null);

  const decodeJwtResponse = useCallback((token) => {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(jsonPayload);
  }, []);

  const handleCredentialResponse = useCallback(
    (response) => {
      try {
        // Decodificar o JWT token
        const responsePayload = decodeJwtResponse(response.credential);

        console.log("ID: " + responsePayload.sub);
        console.log("Full Name: " + responsePayload.name);
        console.log("Given Name: " + responsePayload.given_name);
        console.log("Family Name: " + responsePayload.family_name);
        console.log("Image URL: " + responsePayload.picture);
        console.log("Email: " + responsePayload.email);

        // Criar objeto de usuário compatível com o AuthContext
        const user = {
          id: responsePayload.sub,
          name: responsePayload.name,
          email: responsePayload.email,
          picture: responsePayload.picture,
          given_name: responsePayload.given_name,
          family_name: responsePayload.family_name,
        };

        if (onSuccess) {
          onSuccess(user);
        }
      } catch (error) {
        console.error("Erro ao processar resposta do Google:", error);
        if (onError) {
          onError(error);
        }
      }
    },
    [decodeJwtResponse, onSuccess, onError]
  );

  useEffect(() => {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse,
        auto_select: false,
        cancel_on_tap_outside: false,
      });

      window.google.accounts.id.renderButton(googleButtonRef.current, {
        theme: "outline",
        size: "large",
        text: "signin_with",
        shape: "rectangular",
        logo_alignment: "left",
      });

      // Opcional: Mostrar One Tap se o usuário já estiver logado
      // window.google.accounts.id.prompt();
    }
  }, [handleCredentialResponse]);

  return <div ref={googleButtonRef} className="flex justify-center" />;
};

export default GoogleOfficialLogin;
