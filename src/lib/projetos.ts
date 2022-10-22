import api from '@lib/api';

async function getAllProjects() {
  const res = await api.get('/projetos');
  const projects = await res.data;
  return projects;
}

async function getAllResearchersByProjectId(id: string) {
  const res = await api.get('/projetos/pesquisadoresPorProjeto/' + id);
  const projects = await res.data;
  return projects;
}

export default {
  getAllProjects,
  getAllResearchersByProjectId,
};
