export default function getListStudentIds(arrofObjs) {
  if (!Array.isArray(arrofObjs)) {
    return [];
  }
  return arrofObjs.map((obj) => obj.id);
}
