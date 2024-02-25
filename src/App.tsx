// Voici notre appli de base,
// On retrouve notamment la page où toutes les informations vont être affichés sur ma page (Les inputs, et tableau où seront stockées les infos etc...)

import { FC, ChangeEvent, useState } from 'react';
import './App.css';
import { Certificate } from './interfaces';
import axios from 'axios';
import { saveAs } from 'file-saver';

// Ici je vais venir définir ce qu'on attend de chaques infos ainsi que leurs natures
const App: FC = () => {
  const [lastname, setLastname] = useState<string>("");
  const [firstname, setFirstname] = useState<string>("");
  const [birthday, setBirthday] = useState<Date | null>(null);
  const [birthplace, setBirthplace] = useState<string>("");
  const [option, setOption] = useState<string>("");
  const [mention, setMention] = useState<string>("");
  const [candidat, setCandidat] = useState<Certificate[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);


  // Ce const va me permettre de mettre à jour les infos de mon composant
  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = event.target;
    switch (name) {
      case 'lastname':
        setLastname(value);
        break;
      case 'firstname':
        setFirstname(value);
        break;
      case 'birthday':
        const date = value ? new Date(value) : null;
        setBirthday(date);
        break;
      case 'birthplace':
        setBirthplace(value);
        break;
      case 'option':
        setOption(value);
        break;
      case 'mention':
        setMention(value);
        break;
      default:
        break;
    }
  };


  // Ce const va me permettre de soit -> ajouter un candidat, soit -> modifier un candidat déjà ajouté

  const addOrUpdateCandidat = (): void => {
    if (editIndex !== null) {
      const updatedCandidats = [...candidat];
      updatedCandidats[editIndex] = {
        id: candidat[editIndex].id,
        lastname,
        firstname,
        birthday: birthday || new Date(),
        birthplace,
        option,
        mention,
      };
      setCandidat(updatedCandidats);
      setEditIndex(null);
    } else {
      const newCandidat = {
        id: Math.random().toString(),
        lastname,
        firstname,
        birthday: birthday || new Date(),
        birthplace,
        option,
        mention,
      };
      setCandidat([...candidat, newCandidat]);
    }
    setLastname("");
    setFirstname("");
    setBirthday(null);
    setBirthplace("");
    setMention("");
    setOption("");
  };

  const editCandidat = (index: number): void => {
    const candidatToEdit = candidat[index];
    setLastname(candidatToEdit.lastname);
    setFirstname(candidatToEdit.firstname);
    setBirthday(candidatToEdit.birthday);
    setBirthplace(candidatToEdit.birthplace);
    setMention(candidatToEdit.mention);
    setOption(candidatToEdit.option);
    setEditIndex(index);
  };
  // Ici on va venir supprimer le candidat qu'on aura selectionné
  const deleteCandidat = (index: number): void => {
    const updatedCandidats = [...candidat];
    updatedCandidats.splice(index, 1);
    setCandidat(updatedCandidats);
  };

  // Pour aller un peu plus, j'ai voulu générer un pdf de l'info du candidat selectionné en récuperant son id associé
  const createAndDownloadPdf = (id: string): void => {
    const selectedCandidat = candidat.find(candidat => candidat.id === id);

    axios.post('/create-pdf', selectedCandidat)
      .then((res: any) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
        const filename = selectedCandidat ? `Diplôme_${selectedCandidat.firstname}_${selectedCandidat.lastname}.pdf` : 'diplome.pdf';
        saveAs(pdfBlob, filename);
      })
      .catch((error: any) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="App">
      <div className="logo"></div>
      <h2>Générateur de Diplôme</h2>
      <p><i>Veuillez entrer les informations du candidat:</i></p>
      <div className="formulaire">
        <input type="text" placeholder="Nom" name="lastname" value={lastname} onChange={handleChange} />
        <input type="text" placeholder="Prénom" name="firstname" value={firstname} onChange={handleChange} />
        <input type="date" placeholder="Date de naissance" name="birthday" value={birthday ? birthday.toISOString().split('T')[0] : ''} onChange={handleChange} />
        <input type="text" placeholder="Ville de naissance" name="birthplace" value={birthplace} onChange={handleChange} />
        <select name="option" value={option} onChange={handleChange}>
          <option value="">Sélectionnez un diplôme</option>
          <option value="Bachelor Developpement Web">Bachelor Developpement Web</option>
          <option value="Bachelor Data IA">Bachelor Data IA</option>
          <option value="Bachelor Webmarketing UX">Bachelor Webmarketing UX</option>
          <option value="Programme Grande Ecole">Programme Grande Ecole</option>
          <option value="Mastère CTO Tech Lead">Mastère CTO Tech Lead</option>
          <option value="Mastère Product Manager">Mastère Product Manager</option>
          <option value="Mastère Marketing Digital UX">Mastère Marketing Digital UX</option>
          <option value="Mastère Cybersécurité">Mastère Cybersécurité</option>
          <option value="Prépa Mastère Digital">Prépa Mastère Digital</option>
        </select>

        <select name="mention" value={mention} onChange={handleChange}>
          <option value="">Sélectionnez une mention</option>
          <option value="Très Bien">Mention Très Bien</option>
          <option value="Bien">Mention Bien</option>
          <option value="Assez Bien">Mention Assez Bien</option>
          <option value="Admis">Mention Admis</option>
        </select>
      </div>
      <button onClick={addOrUpdateCandidat}>Ajouter un candidat</button>
      <div className="candidat">
        {/* C'est ici que je vais venir stocker les infos que l'utilisateur aura mis dans ses inputs sous forme de tableau */}
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Date de naissance</th>
              <th>Ville de naissance</th>
              <th>Diplôme obtenu</th>
              <th>Mention</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {candidat.map((candidat, index) => (
              <tr key={index}>
                <td>{candidat.lastname}</td>
                <td>{candidat.firstname}</td>
                <td>{candidat.birthday?.toLocaleDateString()}</td>
                <td>{candidat.birthplace}</td>
                <td>{candidat.option}</td>
                <td>{candidat.mention}</td>
                <td>
                  <button className="actions" onClick={() => editCandidat(index)}>Éditer</button>
                  <button className="actions" onClick={() => deleteCandidat(index)}>Supprimer</button>
                  <button className="actions" onClick={() => createAndDownloadPdf(candidat.id)}>Télécharger</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
