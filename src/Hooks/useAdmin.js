import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(null);
  useEffect(() => {
    if (email) {
      fetch(`https://a12-used-products-resalling-app-server-side.vercel.app/users/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsAdmin(data.isadmin);
        });
    }
  }, [email]);
  return [isAdmin];
};

export default useAdmin;
