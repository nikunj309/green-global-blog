// utils/withAuth.tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getCookie } from 'cookies-next';

const withAuth = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const token = getCookie('token'); // Assuming you store JWT in cookies

      if (!token) {
        router.replace('/admin/login'); // Redirect to login if no token is found
      } else {
        setLoading(false);
      }
    }, [router]);

    if (loading) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
