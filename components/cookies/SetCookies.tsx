"use client";  // This makes it a client-side component

import { useEffect } from "react";

// Client-side component to set the fullName cookie
export default function SetCookie({ fullName }: { fullName: string }) {
  useEffect(() => {
    const setCookie = async () => {
      // Send a POST request to the API route to set the cookie
      try {
        const response = await fetch('/api/set-user-cookie', {
          method: 'POST',
          body: JSON.stringify({ fullName }), // Send fullName to the server
          headers: {
            'Content-Type': 'application/json',
          },
        });

        
        if (!response.ok) {
          throw new Error("Failed to set cookie");
        }
        console.log("Cookie set successfully");
      } catch (error) {
        console.error("Error setting cookie:", error);
      }
    };
    setCookie();
  }, []);  

  return fullName;  
}
