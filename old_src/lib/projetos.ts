import api from 'old_src/lib/api';

async function getAllProjects() {
  const res = await api.get('/projeto');
  const projects = await res.data;
  return projects;
}

async function getProjectById(id: String) {
  const res = await api.get('/projeto/' + id);
  const projects = await res.data;
  return projects;
}

export default {
  getAllProjects,
  getProjectById,
};
