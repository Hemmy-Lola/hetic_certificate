// Le fait exporter les infos va me permettre de clarifier la nature de chaque données qui vont être renseigné dans mon diplôme

export interface Certificate {
    id: string; 
    lastname: string;
    firstname: string;
    birthday: Date | null;
    birthplace: string;
    option: string;
    mention: string;
  }