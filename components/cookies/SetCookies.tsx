"use client";

import { useEffect } from "react";

export default function SetCookie({ fullName }: { fullName: string }) {
  useEffect(() => {
    const setCookie = async () => {
     
      try {
        const response = await fetch('/api/set-user-cookie', {
          method: 'POST',
          body: JSON.stringify({ fullName }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        
        if (!response.ok) {
          throw new Error("Failed to set cookie");
        }
      } catch (error) {
        console.error("Error setting cookie:", error);
      }
    };
    setCookie();
  }, []);  

  return null;  
}
