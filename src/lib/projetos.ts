import api from '@lib/api';

export default async function getAllProjects() {
  const res = await api.get('/projetos');
  const projects = await res.data;
  return projects;
}
