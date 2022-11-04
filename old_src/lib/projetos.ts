import api from 'old_src/lib/api';

async function getAllProjects() {
  const res = await api.get('/projetos');
  const projects = await res.data;
  return projects;
}

export default {
  getAllProjects,
};
