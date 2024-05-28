import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfil } from "../../redux/profil.redux";

function EditProfil() {
  const dispatch = useDispatch();

  const profilData = useSelector((state) => state.user);
  const [isEditing, setIsEditing] = useState(false);
  /*variable bouton "Edit Name" */
  const [editNameButton, setEditNameButton] = useState("Edit Name");
  const inputRef = useRef(null);

  let token = "";
  const getToken = () => {
    token = window.sessionStorage.getItem("token");
    if (!token) {
      token = window.localStorage.getItem("token");
    }
    return token;
  };
  getToken();

  /*variable bouton qui valide le changement de nom */
  const handleEditButtonClick = () => {
    setIsEditing(true);
    setEditNameButton(profilData.userName);
  };
/*variable qui récupére la valeur "nom" */
  const handleButtonNameChange = (e) => {
    setEditNameButton(e.target.value);
  };

  
  const handeleInputName = async () => {
    setIsEditing(false);
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            userName: editNameButton,
          }),
        }
      );
      /*si le npm est bon edite le nom */
      if (response.ok) {
        dispatch(updateProfil({ userName: editNameButton }));
      }
      /*sinon message error */
      else {
        console.error("Erreur");
      }
    } catch (error) {
      console.error("Erreur");
    }
    /*boutton qui change si changement de nom a été effectuer */
    setEditNameButton("Change Name");
  };

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  },
    [isEditing]);

  return (
    <div className="header">
      <h1>
        Welcome back 
        <br />
        {profilData.userName}
      </h1>
      {/*bouton "Edit Name" */}
      {isEditing ? (
        <input className="input-button" type="text"
          ref={inputRef}
          value={editNameButton}
          onChange={handleButtonNameChange}
          onBlur={handeleInputName}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handeleInputName();
            }
          }}
        />
      ) : (
        <button className="edit-button" onClick={handleEditButtonClick}>{editNameButton}</button>  
      )}
    </div>
  );
}

export default EditProfil;