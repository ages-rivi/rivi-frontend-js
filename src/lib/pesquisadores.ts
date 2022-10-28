import api from '@lib/api';

export default async function getAllResearchers() {
  const res = await api.get('/pesquisadores');
  const projects = await res.data;
  return projects;
}
