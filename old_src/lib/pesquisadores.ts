import api from 'old_src/lib/api';

export default async function getAllResearchers() {
  const res = await api.get('/pesquisadores');
  const researchers = await res.data;
  return researchers;
}
