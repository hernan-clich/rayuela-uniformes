import { API_ROUTES } from '~constants/paths';

export const grantAdminRole = async (req: { email: string; adminStatus: boolean }) => {
  const response = await fetch(API_ROUTES.GRANT_ADMIN_ROLE, {
    method: 'POST',
    body: JSON.stringify(req)
  });
  const data = await response.json();
  return data;
};
