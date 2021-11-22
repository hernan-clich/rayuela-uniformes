export enum ESchoolIds {
  generic = 'generic',
  ccdj = 'ccdj',
  cesc = 'cesc',
  csml = 'csml',
  cl13 = 'cl13'
}

export type TSchoolIds = keyof typeof ESchoolIds;

export enum ESchoolNames {
  'Genérico' = 'Genérico',
  'Colegio Corazón de Jesús' = 'Colegio Corazón de Jesús',
  'Colegio Esclavas' = 'Colegio Esclavas',
  'Instituto Santa María de Luján' = 'Instituto Santa María de Luján',
  'Colegio León XIII' = 'Colegio León XIII'
}

export type TSchoolNames = keyof typeof ESchoolNames;

export const CSchools: Record<TSchoolIds, TSchoolNames> = {
  generic: 'Genérico',
  ccdj: 'Colegio Corazón de Jesús',
  cesc: 'Colegio Esclavas',
  csml: 'Instituto Santa María de Luján',
  cl13: 'Colegio León XIII'
};
